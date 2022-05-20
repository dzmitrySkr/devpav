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
  useEffect(() => serch(), []);

  function serch() {
    axios.get(`${URL}`).then((res) => {
      setBooks(res.data.results);
      setNext(res.data.next);
      setPrev(res.data.previous);
    });
  }

  // func for searching worlds in input
  function inputSearch(search) {
    if (search) {
      search.split(" ").join("+");
      axios.get(`${URL}?search=${search.split(" ").join("+")}`).then((res) => {
        setBooks(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
        setSearch("");
      });
    }
  }

  function editPage(page) {
    axios.get(page).then((res) => {
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
