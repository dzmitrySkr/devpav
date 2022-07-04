import { Input, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoComp from "./VideoComp";
import "../Styles/video.css";
import { Link } from "react-router-dom";
import { BsList, BsFillGrid3X3GapFill, BsHeart } from "react-icons/bs";
import React from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { delSearch } from "../store/action/clickAction";
import { delToken } from "../store/action/tokenAction";



// AIzaSyCNmXdleaGFSBnvkYGgIN7lk4BqJ6EvB0E
// require('dotenv').config()

function MainPage() {
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
  let dispatch = useDispatch();

  /*
  Тут меням ключ
  https://console.cloud.google.com/apis/dashboard?project=my-project-1771-347506
  */

  //Наша асинхронная функция для получения видео
  function serch(searchWarld) {
    axios
      .get(
        `${process.env.REACT_APP_YOUTUBE_HTTP}&maxResults=12&q=${searchWarld}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
      )
      .then((res) => {
        setVideo(res.data.items);
      })
      .catch((e) => {
        if (e.request.status === 403) {
          console.log("Поменяйй ключ");
        }
      });
    localStorage.setItem("searchWarld", searchWarld);
    setInputValue("");
  }

  //Эту функцию вызываем из FAVORITE.JS,
  // а точнее из  юзэфекта, когда мы кликнцли по ссылке в фэйворит, и перескочили на мэйн
  function serchfromFP(click) {
    axios
      .get(
        `${process.env.REACT_APP_YOUTUBE_HTTP}&maxResults=${click[0].count}&order=${click[0].sort}&q=${click[0].request}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
      )
      .then((res) => {
        setVideo(res.data.items);
      })
      .then(() => dispatch(delSearch()))
      .catch((e) => {
        if (e.request.status === 403) {
          console.log("Поменяйй ключ");
        }
      });
    setInputValue("");
  }

  // Тут мы берем последнее искомое слово из сторидж и
  // выводи видосы. В CLICK мы вкладываем тот обьект
  // из избранного на который кликнули, и если он у
  // нас есть то мы загружаем его, если нету, то загружаем
  // последнее слово из локал сторидж
  useEffect(() => {
    if (click.length > 0) {
      serchfromFP(click);
      dispatch(delSearch());
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
          <div
            className="exit"
            onClick={() => {
              return dispatch(delToken()), localStorage.removeItem("token");
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
            value={inputValue}
            style={{ width: "calc(100% - 1000px)" }}
            // defaultValue="shark"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(event) => event.key === "Enter" && serch(inputValue)}
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
