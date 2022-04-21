import { Link } from "react-router-dom";
import SaveItem from "./SaveItem";
import { useSelector } from "react-redux";
import "./saveitem.css";

function FavoritePage() {
  let {favorite}= useSelector((state) => state);


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
    </>
  );
}

export default FavoritePage;
