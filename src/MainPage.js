import { Input, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoComp from "./VideoComp";
import "./video.css";
import { Link } from "react-router-dom";
import { BsList, BsFillGrid3X3GapFill, BsHeart } from "react-icons/bs";
import React from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { delsearch } from "./store/action/clickAction";
import { deltoken } from "./store/action/tokenAction";
import additem from "./store/action/favoriteAction";

// AIzaSyCNmXdleaGFSBnvkYGgIN7lk4BqJ6EvB0E

function MainPage() {
  //Контролируем инпут
  let [inputValue, setInputValue] = useState("shark");
  //Записываем массив видео котрые пришли с ютуба, чтобы потом отрендерить
  let [video, setVideo] = useState([]);
  //стэйт для layout главной страници
  let [layout, setLayout] = useState(true);
  //стэйт для показа мадольного окна
  let [modal, setModal] = useState(true);
  let { click } = useSelector((state) => state);
  let dispatch = useDispatch();
  let { token } = useSelector((state) => state);

  let key = "AIzaSyAFKXMqYy12uAo1Wh7fWpSWbH_N-ome0kM";

  //Наша асинхронная функция для получения видео
  function serch(searchWarld) {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchWarld}&key=${key}`
      )
      .then((res) => {
        setVideo(res.data.items);
      });
    localStorage.setItem("searchWarld", searchWarld);
  }

  //Эту функцию надо как-то запустить из избранного
  function serchfromFP(click) {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${click[0].count}&order=${click[0].sort}&q=${click[0].request}&key=${key}`
      )
      .then((res) => {
        setVideo(res.data.items);
      })
      .then(() => dispatch(delsearch()));
  }

  //Тут мы берем последнее искомое слово из сторидж и выводи видосы
  useEffect(() => {
    console.log(token);
    if (click.length > 0) {
      serchfromFP(click);
    } else {
      localStorage.getItem("searchWarld") &&
        serch(localStorage.getItem("searchWarld"));
    }
  }, []);

  return (
    <>
      <header>
        <ul>
          <Link to={"/main"}>
            <li>Поиск</li>
          </Link>
          <Link to={"/saved"}>
            <li>Избранное</li>
          </Link>
        </ul>

        <Link to="/">
          {" "}
          <div className="exit" onClick={() => dispatch(deltoken())}>
            Exit
          </div>
        </Link>
      </header>

      <div className={video.length >= 1 ? "search_title up" : "search_title "}>
        <p>Поиск Видео</p>
        <Input.Group compact>
          <Input
            style={{ width: "calc(100% - 1000px)" }}
            // defaultValue="shark"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <BsHeart className="heart" onClick={() => setModal(!modal)} />
          <Button type="primary" onClick={() => serch(inputValue)}>
            Submit
          </Button>
        </Input.Group>
      </div>
      <div className="icons">
        {video.length >= 1 && (
          <div
            className={layout ? "icon icon_row " : "icon icon_row activ_icon"}
            onClick={() => setLayout(false)}
          >
            {" "}
            <BsList />
          </div>
        )}
        {video.length >= 1 && (
          <div
            className={
              layout ? "icon icon_block activ_icon" : "icon icon_block"
            }
            onClick={() => setLayout(true)}
          >
            <BsFillGrid3X3GapFill />
          </div>
        )}
      </div>

      <div className={layout ? "lists lists_row" : "lists "}>
        {video.map((item) => (
          <VideoComp
            key={item.snippet.title}
            layout={layout}
            title={item.snippet.title}
            imgUrl={item.snippet.thumbnails.high.url}
            description={item.snippet.description}
          />
        ))}
      </div>

      <Modal modal={modal} setModal={setModal} />
    </>
  );
}

export default React.memo(MainPage);
