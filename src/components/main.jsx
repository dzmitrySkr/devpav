import { Link, Routes, Route } from "react-router-dom";
import "../styles/main.css";
import Users from "./users";
import Moduls from "./moduls";
import Another from "./another";

function Main() {
  return (
    <>
      <div className="flexwrapper">
        <div className="sidebar">
          <ul>
            <Link to={"/"}>
              <li>Пользователи</li>
            </Link>
            <Link to={"moduls"}>
              <li>Модули</li>
            </Link>
            <Link to={"another"}>
              {" "}
              <li>Разное</li>
            </Link>
          </ul>
        </div>
        <div className="infobar">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="moduls" element={<Moduls />} />
            <Route path="another" element={<Another />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Main;
