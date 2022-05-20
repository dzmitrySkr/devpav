import { useState } from "react";
import "../Styles/mainpage.css";
import ListOfBooks from "./ListOfBooks";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favorites from "./Favorites";

function MainPage() {
  //State for making active h2
  let [active, setActive] = useState(true);

  return (
    <>
      <BrowserRouter>
        <div className="links">
          <Link to="/">
            <h2
              className={active ? "active_link" : "link"}
              onClick={() => setActive(true)}
            >
              {" "}
              List of Books
            </h2>
          </Link>
          <Link to="favorites">
            <h2
              className={active ? "link" : "active_link"}
              onClick={() => setActive(false)}
            >
              Favorites
            </h2>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<ListOfBooks />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      <footer>
       made by <a href="https://dzmitryskr.github.io/introduse/">Dzmitry</a>
      </footer>
    </>
  );
}

export default MainPage;
