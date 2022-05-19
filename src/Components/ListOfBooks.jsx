import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BookComp from "./BookComp";
import { BsList, BsFillGrid3X3GapFill, BsHeart } from "react-icons/bs";
import "../Styles/mainpage.css";
import Modal from "../Components/Modal";

function ListOfBooks() {
  let [books, setBooks] = useState([]);
  let [layout, setLayout] = useState(false);
  let [next, setNext] = useState(null);
  let [prev, setPrev] = useState(null);
  let [search, setSearch] = useState("");
  let [textbook, setTextbook] = useState(null);
  let [modal, setModal] = useState(false);

  //calling func in didMount
  useEffect(() => serch(), []);

  function serch() {
    axios.get(`https://gnikdroy.pythonanywhere.com/api/book/`).then((res) => {
      setBooks(res.data.results);
      setNext(res.data.next);
      setPrev(res.data.previous);
    });
  }

  // func for searching worlds in input
  function inputSearch(search) {
    if (search) {
      search.split(" ").join("+");
      axios
        .get(
          `https://gnikdroy.pythonanywhere.com/api/book/?search=${search
            .split(" ")
            .join("+")}`
        )
        .then((res) => {
          setBooks(res.data.results);
          setNext(res.data.next);
          setPrev(res.data.previous);
          setSearch("");
        });
    }
  }

  function nextPage() {
    axios.get(next).then((res) => {
      setBooks(res.data.results);
      setNext(res.data.next);
      setPrev(res.data.previous);
    });
  }

  function prevPage() {
    axios.get(prev).then((res) => {
      setBooks(res.data.results);
      setNext(res.data.next);
      setPrev(res.data.previous);
    });
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
      <div className="list_buttons">
        <button disabled={!Boolean(prev)} onClick={() => prevPage()}>
          Prev
        </button>
        <button disabled={!Boolean(next)} onClick={() => nextPage()}>
          Next
        </button>
      </div>

      <Modal text={textbook} modal={modal} setModal={setModal} />
    </>
  );
}

export default ListOfBooks;
