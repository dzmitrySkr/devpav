import { Link } from "react-router-dom";
import SaveItem from "./SaveItem";
import "../Styles/saveitem.css";
import { useEffect, useState } from "react";

function FavoritePage() {
  //Берем наш токен из LS
  let token = localStorage.getItem("token");
  let [favorite, setFavorite] = useState([]);

  //Если такой токен есть то записываем его в переменную и далее парсим его. В нем лежат наши сохраненные поиски
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(token));
    if (items) {
      setFavorite(items);
    }
  }, []);

  //При изменении нашей переменной мы заносим в LS новые данные
  useEffect(() => {
    localStorage.setItem(token, JSON.stringify(favorite));
  }, [favorite]);

  return (
    <>
      <header>
        <ul>
          <Link to={"/main"}>
            <li>Search</li>
          </Link>
          <Link to={"/saved"}>
            <li style={{color:"white"}}>Favorites</li>
          </Link>
        </ul>
        <Link to="/">
          {" "}
          <div className="exit">Exit</div>
        </Link>
      </header>

      <div className="saved_pages">
        {/*ПРоверяем на массив в переменной, и парсим его*/}
        {Array.isArray(favorite) &&
          favorite.map((item, index) => (
            <SaveItem
              key={index}
              item={item}
              setFavorite={setFavorite}
              favorite={favorite}
            />
          ))}
      </div>
      <button
        className="clearLocalStor"
        onClick={() => {
          setFavorite([]);
        }}
      >
        Delete
      </button>
    </>
  );
}

export default FavoritePage;
