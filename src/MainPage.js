import { Input, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoComp from "./VideoComp";
import "./video.css";
import { Link } from "react-router-dom";
import { BsList, BsFillGrid3X3GapFill, BsHeart } from "react-icons/bs";
import React from "react";
import Modal from "./Modal";

// AIzaSyCNmXdleaGFSBnvkYGgIN7lk4BqJ6EvB0E

function MainPage() {
  //Контролируем инпут
  let [inputValue, setInputValue] = useState("shark");
  //Записываем массив видео котрые пришли с ютуба, чтобы потом отрендерить
  let [video, setVideo] = useState([]);

  let key = 'AIzaSyAFKXMqYy12uAo1Wh7fWpSWbH_N-ome0kM'

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
  function serchfromFP(searchWarld, count, sort ) {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${count}&order=${sort}&q=${searchWarld}&key=${key}`
      )
      .then((res) => {
        setVideo(res.data.items);
      });
    localStorage.setItem("searchWarld", searchWarld);
  }


  //Тут мы берем последнее искомое слово из сторидж и выводи видосы
  useEffect(() => {
    localStorage.getItem("searchWarld") &&
      serch(localStorage.getItem("searchWarld"));
      console.log('effect');
  }, []);

  //функция для переключения сортировки выводимых видео (столбик и строчка)
  function listRow(toggle) {
    document
      .querySelectorAll(".icon")
      .forEach((n) => n.classList.remove("activ_icon"));
    if (toggle) {
      document
        .querySelectorAll(".video_item")
        .forEach((n) => n.classList.add("row"));
      document
        .querySelectorAll(".lists")
        .forEach((n) => n.classList.add("lists_row"));

      document.querySelector(".icon_block").classList.add("activ_icon");
    } else {
      document
        .querySelectorAll(".video_item")
        .forEach((n) => n.classList.remove("row"));
      document
        .querySelectorAll(".lists")
        .forEach((n) => n.classList.remove("lists_row"));
      document.querySelector(".icon_row").classList.add("activ_icon");
    }
  }

  //поднимаем или опускаем инпут в зависимости есть ли видео (инпут поцентру экрана)
  useEffect(() => {
    video.length > 1
      ? document.querySelector(".search_title").classList.add("up")
      : document.querySelector(".search_title").classList.remove("up");
  });

  //Показываем модульное окно
    let showmodal = () => {
      document.querySelector('.modal').classList.toggle('hide')
    }


  return (
    <>
      {/* "login": "www@mail.ru",
  "password": "As!#@123123", */}

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
          <div className="exit">Exit</div>
        </Link>
      </header>

      <div className="search_title up">
        <p>Поиск Видео</p>
        <Input.Group compact>
          <Input
            style={{ width: "calc(100% - 1000px)" }}
            // defaultValue="shark"
            onChange={(e) => setInputValue(e.target.value)}
          />
           <BsHeart className="heart"  onClick={()=>showmodal()} />
          <Button type="primary" onClick={() => serch(inputValue)}>
            Submit 
          </Button>
         
        </Input.Group>
      </div>
      <div className="icons">
        {video.length > 1 && (
          <div className="icon icon_row " onClick={() => listRow(false)}>
            {" "}
            <BsList />
          </div>
        )}
        {video.length > 1 && (
          <div
            className="icon icon_block activ_icon"
            onClick={() => listRow(true)}
          >
            <BsFillGrid3X3GapFill />
          </div>
        )}
      </div>
      <div className="lists lists_row">
        {video.map((item) => (
          <VideoComp
            title={item.snippet.title}
            imgUrl={item.snippet.thumbnails.high.url}
            description={item.snippet.description}
          />
        ))}
      </div>

    <Modal/>
    </>
  );
}

export default React.memo(MainPage);
