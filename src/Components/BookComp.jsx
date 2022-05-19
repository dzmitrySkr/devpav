import { useEffect, useState } from "react";
import "../Styles/bookcomp.css";

function BookComp({ item, come, setFavorite, setTextbook, modal, setModal }) {
  let [count, setCount] = useState(0);
  let [disable, setDisabled] = useState(false);

  //remember favorite books in localstore
  let setToFavorite = (item) => {
    if (localStorage.getItem("MyBooks")) {
      localStorage.setItem(
        "MyBooks",
        JSON.stringify([...JSON.parse(localStorage.getItem("MyBooks")), item])
      );
    } else {
      localStorage.setItem("MyBooks", JSON.stringify([item]));
    }
    setCount(count + 1);
  };

  //delete books from Localstore
  let delFromLS = (item) => {
    let ls = JSON.parse(localStorage.getItem("MyBooks"));
    let newls = ls.filter((i) => i.id !== item.id);
    localStorage.setItem("MyBooks", JSON.stringify(newls));
    setFavorite(newls);
  };

  // function for open modal window and get info to the modal (setText)
  let read = (item) => {
    setTextbook(item);
    setModal(!modal);
  };

  //render window and disable buttons if have same book in LocalStore
  useEffect(() => {
    localStorage.getItem("MyBooks") &&
      JSON.parse(localStorage.getItem("MyBooks")).forEach((i) => {
        i.id === item.id && setDisabled(true);
      });
  }, [count]);

  return (
    <>
      <div className="book">
        <p className="item_title">{item.title}</p>
        <div onClick={() => read(item)}>
          <img
            src={
              item.resources.find((item) => {
                if (item.uri.includes("medium")) {
                  return item.uri;
                }
              }).uri
            }
            alt={item.title}
          />
        </div>

        <div className="buttons">
          <button onClick={() => read(item)}>Read</button>
          {come ? (
            <button onClick={() => delFromLS(item)}> Delete </button>
          ) : (
            <button onClick={() => setToFavorite(item)} disabled={disable}>
              {" "}
              Favorite{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BookComp;
