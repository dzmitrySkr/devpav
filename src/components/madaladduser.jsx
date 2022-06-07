import "../styles/modal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../store/action/addAction";

function ModalAddUser({ modulToggle, setModulToggle, setShadow }) {
  let [firstName, setFirstName] = useState("");
  let [telegram, setTelegram] = useState("");
  let [instagram, setInstagram] = useState("");
  let [login, setLogin] = useState("");
  let [modul, setModul] = useState("HTML");
  let dispatch = useDispatch();

  //Close modal. Clea input
  let closeModal = () => {
    setModulToggle(false);
    setShadow(false)
    setFirstName("");
    setTelegram("");
    setInstagram("");
    setLogin("");
    setModul("");
  };

  let saveUserInRS = () => {
    if ((firstName, telegram, instagram, login, modul)) {
      let obj = {
        id: Math.floor(Math.random() * (500 - 200)) + 200,
        firstName: firstName,
        telegram: telegram,
        instagram: instagram,
        login: login,
        modul: modul,
        progress:[ {title: 'Переменные', status: true},
        {title: 'Типы данных', status: true},
         {title: 'Операторы', status: false},
         {title: 'Операторы сравнения', status: true},
        {title: 'Условные операторы', status: true},
         {title: 'Логические операторы', status: false},
       {title: 'Цикл', status: true},
         {title: "Конструкция 'switch'", status: true},
         {title: 'Функции', status: false},
         {title: 'Объекты', status: true},
         {title: 'this, методы объекта', status: true},
         {title: 'Конструктор', status: false},
         {title: 'Методы у примитивов', status: true},
         {title: 'Числа', status: true},
       {title: 'Строки', status: false},
         {title: 'Массивы', status: false},
        {title: 'Методы массивов', status: true},
        {title: 'Map и Set', status: true},
        {title: 'Object.keys, values, entries', status: false},
         {title: 'Деструктурирующее присваивание', status: true},
         {title: 'Дата и время', status: true},
         {title: 'Формат JSON, метод toJSON', status: false},
         {title: 'Прототипное наследование', status: true},
         {title: 'class', status: true},
         {title: 'try-catch', status: false},
         {title: 'callback', status: true},
         {title: 'promise', status: true},
         {title: 'async/await', status: false}],
         updatedAt: "2022-05-18T11:56:29.598Z"
      };
      dispatch(saveUser(obj));
      setModulToggle(false);
      setShadow(false)
    }
  };

  return (
    <>
      <div className={modulToggle ? "modal" : "modal hide"}>
        <div className="name">
          <p className="name_title title">Имя Фамилия</p>
          <input
            type="text"
            placeholder="John Malkovich"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="name_input"
          />
        </div>
        <div className="telegram">
          <p className="telegram_title title">Telegram</p>
          <input
            type="text"
            placeholder="@John7"
            className="telegram_input"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
          />
        </div>
        <div className="instagram">
          <p className="instagram_title title">Instagram</p>
          <input
            type="text"
            placeholder="John_Malkovich"
            className="instagram_input"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="login">
          <p className="login_title title">Login</p>
          <input
            type="text"
            placeholder="John_M@wp.pl"
            className="login_input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="modul">
          <p className="modul_title title">Модуль</p>
          <select
            className="modul_select"
            value={modul}
            onChange={(e) => setModul(e.target.value)}
          >
            <option defaultValue={"HTML"} value={"HTML"}>
              HTML
            </option>
            <option value={"CSS"}>CSS</option>
            <option value={"JS"}>JavaScript</option>
            <option value={"REACT"}>REACT</option>
            <option value={"NODE"}>NODE</option>
          </select>
        </div>

        <div className="buttons">
          <button className="sumbit" onClick={() => saveUserInRS()}>
            Sumbit
          </button>
          <button className="cancel" onClick={() => closeModal()}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalAddUser;
