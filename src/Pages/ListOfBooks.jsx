import BookComp from "../Components/BookComp";
import "../Styles/mainpage.css";
import Modal from "../Components/Modal";
import Icons from "../Components/Icons";
import EditButtons from "../Components/EditButtons";
import { useListOfBooks } from "../Hooks/useListOfBooks";

function ListOfBooks() {
  let {
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
  } = useListOfBooks();

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
