import "../../styles/modal.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/action/addAction";
import { useSelector } from "react-redux/es/exports";

function ModalAddUser({ modulToggle, setModulToggle }) {
  const FULL_NAME_URL = process.env.REACT_APP_URL_USERS;
  const [firstName, setFirstName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");
  const [login, setLogin] = useState("");
  const [modul, setModul] = useState("HTML");
  let { storeModules } = useSelector((store) => store);
  const dispatch = useDispatch();

  //Close modal. Clean input
  const closeModal = () => {
    setModulToggle(false);
    setFirstName("");
    setTelegram("");
    setInstagram("");
    setLogin("");
    setModul("");
  };

  let saveUserInRS = async () => {
    if ((firstName, telegram, instagram, login, modul)) {
      const obj = {
        login: login,
        password: "123123",
        firstName: firstName,
        lastName: " ",
        isAdmin: false,
        instagram: `@${instagram}`,
        telegram: `@${telegram}`,
        moduleId: Math.floor(Math.random() * (500 - 200)) + 200,
      };
      try {
        const response = await fetch(process.env.REACT_APP_URL_ADDUSER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        const response2 = await fetch(`${FULL_NAME_URL}`);
        const searchusers = await response2.json();
        dispatch(addUsers(searchusers));
        // enter you logic when the fetch is successful
        console.log(data);
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      }
      closeModal();
    }
  };

  return (
    <>
      <div className={modulToggle ? "modal" : "modal hide"}>
        <div className="name">
          <p className="name_title title">Name Surname</p>
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
          <p className="modul_title title">Modul</p>
          <select
            className="modul_select"
            value={modul}
            onChange={(e) => setModul(e.target.value)}
          >
            <option defaultValue={"HTML"} value={"HTML"}>
              HTML
            </option>
            {storeModules.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
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
