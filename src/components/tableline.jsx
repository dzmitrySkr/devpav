import { useEffect, useState } from "react";
import React from "react";
import "../styles/tableline.css";
import ModalChangeUser from "./ModalChangeUser";

function TableLine({ item, setShadow }) {
  let URL = process.env.REACT_APP_URL_SOCNET;
  let URL2 = process.env.REACT_APP_URL_USERMODUL;
  let URL3 = process.env.REACT_APP_URL_MODULES;

  let [instaFromBack, setInstaFromBack] = useState("");
  let [telegaFromBack, setTelegaFromBack] = useState("");
  let [toggleModalChUser, setToggleModalChUser] = useState(false);
  let [modul, setModul] = useState("");

  // add modules
  useEffect(() => {
    const serch = async () => {
      let response = await fetch(`${URL2}${item.id}`);
      let searchnodules = await response.json();
      let response2 = await fetch(`${URL3}${searchnodules[0].module_id}`);
      let searchnodules2 = await response2.json();
      searchnodules2 && setModul(searchnodules2.title);
    };
    serch().catch(console.error);
  }, []);

  //add telegram and instagram
  useEffect(() => {
    const serch = async () => {
      let response = await fetch(`${URL}${item.id}`);
      let searchUsers = await response.json();
      searchUsers && setInstaFromBack(searchUsers.instagram);
      searchUsers && setTelegaFromBack(searchUsers.telegram);
    };
    serch().catch(console.error);
  }, []);

  return (
    <>
      <div className="line">
        <div className="name line_item">
          <a
            href={`https://t.me/${
              telegaFromBack
                ? telegaFromBack.slice(1)
                : item.telegram && item.telegram.slice(1)
            }`}
            target={"_blank"}
          >
            {item.firstName} {item.lastName}
          </a>
        </div>
        <div className="telrgram line_item">
          {telegaFromBack || item.telegram}
        </div>
        <div className="instagram line_item">
          {instaFromBack || item.instagram}
        </div>
        <div className="login line_item">{item.login}</div>
        <div className="modul_name line_item">{modul || item.modul}</div>
        <div className="start_date line_item">
          {item.updatedAt &&
            item.updatedAt.split("T")[0].split("-").reverse().join("-")}
        </div>
        <div className="action line_item">Invite</div>
        <div
          className="change line_item"
          onClick={() => {
            return setToggleModalChUser(!toggleModalChUser), setShadow(true);
          }}
        >
          Change
        </div>
      </div>

      <ModalChangeUser
        toggleModalChUser={toggleModalChUser}
        setToggleModalChUser={setToggleModalChUser}
        item={item}
        setShadow={setShadow}
      />
    </>
  );
}

export default React.memo(TableLine);
