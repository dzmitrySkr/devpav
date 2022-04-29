import { Link } from "react-router-dom";
import SaveItem from "./SaveItem";
import { useSelector } from "react-redux";
import "../Styles/saveitem.css";
import { useDispatch } from "react-redux";
import { dellitem } from "../store/action/favoriteAction";


function FavoritePage() {
  
  let {favorite}= useSelector((state) => state);
  let dispatch = useDispatch();
  let { token } = useSelector((state) => state);
  let favoriteFromLS = JSON.parse(localStorage.getItem(token))


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
        {favorite.map((item) => (
          <SaveItem key={new Date().getTime()} item={item} />
        ))}

   
      </div>
      <button className="clearLocalStor" onClick={()=>{dispatch(dellitem())}}>Удалить из ЛС</button>
    </>
  );
}

export default FavoritePage;
