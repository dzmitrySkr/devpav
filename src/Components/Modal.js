import { useEffect, useState } from "react";
import "../Styles/modal.css";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "../store/action/favoriteAction";

function Modal({ modal, setModal, editObj }) {
  //контролируемые параметры нашего инпута


    let [request, setRequest] = useState('');
    let [name, setName] = useState("");
    let [sort, setSort] = useState("date");
    let [count, setCount] = useState(12);
    let token = localStorage.getItem("token");

    console.log(name);

  //При сохронении заносим в LS, потом этот стор будем заносить в ЛС
  let savemodal = () => {
    if (request && name && sort && count && token) {
      localStorage.getItem(token)
        ? localStorage.setItem(
            token,
            JSON.stringify([
              ...JSON.parse(localStorage.getItem(token)),
              { request: request, name: name, sort: sort, count: count },
            ])
          )
        : localStorage.setItem(
            token,
            JSON.stringify([
              { request: request, name: name, sort: sort, count: count },
            ])
          );
    }

    setModal(!modal);
    setRequest("");
    setName("");
  };

  let closemodal = () => {
    setModal(!modal);
    setRequest("");
    setName("");
  };

  return (
    <div className={modal ? "modal hide" : "modal"}>
      <div className="modal_title">
        <p>Сохранить запрос</p>
      </div>

      <div className="modal_request">
        <p>Запрос</p>
        <input
          value={request}
          className="modal_request_inp"
          onChange={(e) => setRequest(e.target.value)}
        ></input>
      </div>

      <div className="modal_name">
        <p>Название</p>
        <input
          value={name}
          className="modal_name_inp"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="modal_sort">
        <p>Сортировка</p>
        <select
          name="modal_sort_values"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date">date</option>
          <option value="rating">rating</option>
          <option value="viewCount">viewCount</option>
          <option value="title">title</option>
        </select>
      </div>

      <div className="modal_count">
        <p>Количество</p>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="range"
          id="cowbell"
          name="cowbell"
          min="1"
          max="50"
          step="1"
          value={count}
        />{" "}
        <span>{count}</span>
      </div>

      <div>
        <button onClick={() => closemodal()} className="not_save">
          Не сохранять
        </button>
        <button className="save" onClick={() => savemodal()}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default Modal;
