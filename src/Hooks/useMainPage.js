import axios from "axios";
import { useEffect, useState } from "react";

import "../Styles/video.css";

import { useDispatch, useSelector } from "react-redux";
import { delSearch } from "../store/action/clickAction";

export function useMainPage() {
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

  return {
    inputValue,
    video,
    layout,
    modal,
    dispatch,
    serch,
    setInputValue,
    setLayout,
    setModal,
  };
}
