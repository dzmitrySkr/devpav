import "../Styles/saveitem.css";
import { useDispatch } from "react-redux";
import { addsearch } from "../store/action/clickAction";
import { additem } from "../store/action/editAction";
import { useNavigate } from "react-router";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

function SaveItem({ item, favorite, setFavorite }) {
  let [modal, setModal] = useState(true);
  let dispatch = useDispatch();

  let navigate = useNavigate();

  let goMain = (item) => {
    dispatch(addsearch(item));
    navigate("../main");
  };

  //Функция изменения в локал стор одного запроса
  let edit = (e, item) => {
    dispatch(additem(item));
    setModal(!modal);
    e.stopPropagation();
  };

  //Функция удаления из локал стор одного запроса
  let delite = (e, item) => {
    let newfavorite = favorite.filter(
      (favorite) => favorite.name !== item.name
    );
    setFavorite([...newfavorite]);
    e.stopPropagation();
  };

  return (
    <>
      <div className="item" onClick={() => goMain(item)}>
        <div>{item.name}</div>
        <div className="flex_wrapper">
          <div className="item_button edit" onClick={(e) => edit(e, item)}>
            <AiFillEdit />
          </div>
          <div className="item_button close" onClick={(e) => delite(e, item)}>
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>

      <Modal modal={modal} setModal={setModal} setFavorite={setFavorite} />
    </>
  );
}

export default SaveItem;
