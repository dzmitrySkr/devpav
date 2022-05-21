import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BookComp from "./BookComp";
import "../Styles/mainpage.css";
import Modal from "../Components/Modal";
import Icons from "./Icons";
import EditButtons from "./EditButtons";

function ListOfBooks() {
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

  return (
    <>
      <div className="wrapper_head">
        <div className="search_book">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={() => inputSearch(search)}>Search book</button>
        </div>

        <Icons setLayout={setLayout} layout={layout} />
      </div>
      <div className={layout ? "books_col" : "books_row"}>
        {books.map((item) => (
          <BookComp
            key={item.id}
            item={item}
            setTextbook={setTextbook}
            modal={modal}
            setModal={setModal}
          />
        ))}
      </div>

      <EditButtons prev={prev} next={next} editPage={editPage} />

      <Modal text={textbook} modal={modal} setModal={setModal} />
    </>
  );
}

export default ListOfBooks;
