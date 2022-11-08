import { useEffect, useState } from "react";

export function useBookComp(setFavorite, item, setTextbook, modal, setModal) {
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
    setDisabled(!disable);
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
  }, []);

  return { disable, setToFavorite, delFromLS, read };
}
