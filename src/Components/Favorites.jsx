import { useEffect, useState } from "react";
import BookComp from "./BookComp";
import Modal from "./Modal";

import { BsList, BsFillGrid3X3GapFill } from "react-icons/bs";
import "../Styles/mainpage.css";

function Favorites() {
  let [layout, setLayout] = useState(false);
  let [favorite, setFavorite] = useState([]);
  let [modal, setModal] = useState(false);
  let [textbook, setTextbook] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("MyBooks"));
    if (items) {
      setFavorite(items);
    }
  }, []);

  return (
    <>
      <>
        <div className="icons">
          <div
            className={layout ? "icon icon_col icon_active" : "icon icon_col"}
            onClick={() => setLayout(true)}
          >
            <BsList />
          </div>
          <div
            className={layout ? "icon icon_row" : "icon icon_row icon_active"}
            onClick={() => setLayout(false)}
          >
            <BsFillGrid3X3GapFill />
          </div>
        </div>
        <div className={layout ? "books_col" : "books_row"}>
          {Array.isArray(favorite) &&
            favorite.map((item) => (
              <BookComp
                key={item.id}
                item={item}
                setFavorite={setFavorite}
                setTextbook={setTextbook}
                come={true}
                modal={modal}
                setModal={setModal}
              />
            ))}
          {favorite.length === 0 && (
            <p className="no_books">No favorite books</p>
          )}
        </div>
      </>
      <Modal text={textbook} modal={modal} setModal={setModal} />
    </>
  );
}

export default Favorites;
