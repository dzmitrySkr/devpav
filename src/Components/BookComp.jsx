import { useEffect, useState } from "react";
import "../Styles/bookcomp.css";

function BookComp({ item, come, setFavorite, setTextbook, modal, setModal }) {
  let [count, setCount] = useState(0);
  let [disable, setDisabled] = useState(false);

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

  let delFromLS = (item) => {
    let ls = JSON.parse(localStorage.getItem("MyBooks"));
    let newls = ls.filter((i) => i.id !== item.id);
    localStorage.setItem("MyBooks", JSON.stringify(newls));
    setFavorite(newls);
  };

  let read = (item) => {
    setTextbook(item);
    setModal(!modal);
  };

  useEffect(() => {
    localStorage.getItem("MyBooks") &&
      JSON.parse(localStorage.getItem("MyBooks")).forEach((i) => {
        i.id === item.id && setDisabled(true);
      });
  }, [count]);

  return (
    <>
      <div className="book" onClick={() => read(item)}>
        <p className="item_title">{item.title}</p>
        <div>
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
