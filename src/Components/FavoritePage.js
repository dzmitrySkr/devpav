import { Link } from "react-router-dom";
import SaveItem from "./SaveItem";
import { useSelector } from "react-redux";
import "../Styles/saveitem.css";
import { useDispatch } from "react-redux";
import { dellitem } from "../store/action/favoriteAction";
import { useEffect, useState } from "react";


function FavoritePage() {
  
  let token = localStorage.getItem("token")
  let favoriteFromLS = JSON.parse(localStorage.getItem(token))
  let [favorite, setFavorite] = useState(favoriteFromLS) 
  console.log(favorite);

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
          <div className="exit">Exit</div>
        </Link>
      </header>

      <div className="saved_pages">
        {Array.isArray(favorite) && favorite.map((item) => (
          <SaveItem key={new Date().getTime()} item={item} setFavorite={setFavorite} />
        ))}
   
      </div>
      <button className="clearLocalStor" onClick={()=>{localStorage.setItem(token, JSON.stringify([]))}}>Удалить из ЛС</button>

    </>
  );
}

export default FavoritePage;
