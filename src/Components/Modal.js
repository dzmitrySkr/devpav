import { useEffect, useState } from "react";
import "../Styles/modal.css";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "../store/action/editAction";

function Modal({ modal, setModal, setFavorite }) {
  //контролируемые параметры нашего инпута
  let dispatch = useDispatch();
  let [request, setRequest] = useState("");
  let [name, setName] = useState("");
  let [sort, setSort] = useState("date");
  let [count, setCount] = useState(12);
  let token = localStorage.getItem("token");
  let { edit } = useSelector((store) => store);

  //Если у нас есть обьект EDIT, значит мы зашли со стороны редактирования поиска, а значит
  // мы в инпут заносим те value которые у нас в обьекте поиска
  useEffect(() => {
    edit && setRequest(edit.request);
    edit && setName(edit.name);
    edit && setSort(edit.sort);
    edit && setCount(edit.count);
  }, [modal]);

  //При сохронении заносим в LS
  let savemodal = () => {
    //Если у нас в модалку передался обьект то значит мы в модалку зашли для редактирования,
    //а значит при сохранении нам надо заменить имеющийся обьект. Меняем мы его так: В LS ищем  обьект
    // который мы сохранили в редакс, и меняем его на тот который у нас записан в модалке.
    if (edit) {
      localStorage.setItem(
        token,
        JSON.stringify([
          ...JSON.parse(localStorage.getItem(token)).map((item) =>
            item.request === edit.request
              ? { request: request, name: name, sort: sort, count: count }
              : item
          ),
        ])
      );
    } else {
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
    }
    //Закрываем модалку и очищаем инпуты
    setModal(!modal);
    setRequest("");
    setName("");
    //очищаем наш стор, для того чтобы когда мы в модалку зашли со стороны сохранения (не редактирования), в инпутах у нас было пусто
    dispatch(additem(""));

    //Синхронизируем наш LS с нашей переменной которую мы парсим для показа сохраненных поисков
    setFavorite(JSON.parse(localStorage.getItem(token)));
  };

  let closemodal = () => {
    //При зкрытии окна закрываем модалку очищаем инпуты, удаляем обьект редактирования
    setModal(!modal);
    setRequest("");
    setName("");
    dispatch(additem(""));
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
        <button
          onClick={() => {
            return closemodal(), dispatch(additem(""));
          }}
          className="not_save"
        >
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
