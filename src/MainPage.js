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
import { additem, dellitem } from "./store/action/favoriteAction";
import { useNavigate } from "react-router";
// AIzaSyCNmXdleaGFSBnvkYGgIN7lk4BqJ6EvB0E

function MainPage() {
  let navigate = useNavigate();
  //Контролируем инпут
  let [inputValue, setInputValue] = useState("shark");
  //Записываем массив видео котрые пришли с ютуба, чтобы потом отрендерить
  let [video, setVideo] = useState([]);
  //стэйт для layout главной страници
  let [layout, setLayout] = useState(true);
  //стэйт для показа мадольного окна
  let [modal, setModal] = useState(true);
  //Стор для обекта по которомц мы кликнули в фэйворит. Заносим стдаобьект с данными
  let { click } = useSelector((state) => state);
  //Стор для токена
  let { token } = useSelector((state) => state);
  let dispatch = useDispatch();

  let key = "AIzaSyAFD6fZAkU3lu4joANuTZV5gvFFvLodrw0";

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

  //Эту функцию вызываем из FAVORITE.JS,
  // а точнее из  юзэфекта, когда мы кликнцли по ссылке в фэйворит, и перескочили на мэйн
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

  // Тут мы берем последнее искомое слово из сторидж и
  // выводи видосы. В CLICK мы вкладываем тот обьект
  // из избранного на который кликнули, и если он у
  // нас есть то мы загружаем его, если нету, то загружаем
  // последнее слово из локал сторидж
  useEffect(() => {
    if (click.length > 0) {
      serchfromFP(click);
      dispatch(delsearch());
    } else {
      localStorage.getItem("searchWarld") &&
        serch(localStorage.getItem("searchWarld"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      console.log(token);
      // localStorage.getItem(token) && dispatch(additem(...JSON.parse(localStorage.getItem(token))));
    } else {
      navigate("/");
    }
  }, [token]);

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
          <div
            className="exit"
            onClick={() => {
              return dispatch(deltoken()), dispatch(dellitem());
            }}
          >
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

export default MainPage;
