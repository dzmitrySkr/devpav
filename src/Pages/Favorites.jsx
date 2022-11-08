import { useEffect, useState } from "react";
import BookComp from "../Components/BookComp";
import Modal from "../Components/Modal";
import "../Styles/mainpage.css";
import Icons from "../Components/Icons";

function Favorites() {
  let [layout, setLayout] = useState(false);
  let [favorite, setFavorite] = useState([]);
  let [modal, setModal] = useState(false);
  let [textbook, setTextbook] = useState(null);

  //Take books from localStore (if have), and sace in state, next
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("MyBooks"));
    if (items) {
      setFavorite(items);
    }
  }, []);

  return (
    <>
      <>
        <Icons setLayout={setLayout} layout={layout} />

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
