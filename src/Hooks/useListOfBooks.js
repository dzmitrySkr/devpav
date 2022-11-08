import { useEffect } from "react";
import { useState } from "react";

export function useListOfBooks() {
  let [books, setBooks] = useState([]);
  let [layout, setLayout] = useState(false);
  let [next, setNext] = useState(null);
  let [prev, setPrev] = useState(null);
  let [search, setSearch] = useState("");
  let [textbook, setTextbook] = useState(null);
  let [modal, setModal] = useState(false);
  let URL = "https://gnikdroy.pythonanywhere.com/api/book/";

  //calling func in didMount
  useEffect(() => {
    const serch = async () => {
      let response = await fetch(`${URL}`);
      let searchbooks = await response.json();
      setBooks(searchbooks.results);
      setNext(searchbooks.next);
      setPrev(searchbooks.previous);
    };
    serch().catch(console.error);
  }, []);

  // func for searching worlds in input
  async function inputSearch(search) {
    if (search) {
      search.split(" ").join("+");
      let response = await fetch(
        `${URL}?search=${search.split(" ").join("+")}`
      );
      let searchbooks = await response.json();
      setBooks(searchbooks.results);
      setNext(searchbooks.next);
      setPrev(searchbooks.previous);
      setSearch("");
    }
  }

  async function editPage(page) {
    let response = await fetch(page);
    let newpage = await response.json();
    setBooks(newpage.results);
    setNext(newpage.next);
    setPrev(newpage.previous);
  }

  return {
    books,
    layout,
    next,
    prev,
    search,
    textbook,
    modal,
    setLayout,
    setSearch,
    setTextbook,
    editPage,
    inputSearch,
    setModal,
  };
}
