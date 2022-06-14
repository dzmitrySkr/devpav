import { Link, Routes, Route } from "react-router-dom";
import "../styles/main.css";
import Users from "./users";
import Moduls from "./moduls";
import Another from "./another";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate()

  let exit = () => {
    localStorage.removeItem('token')
    navigate('/')
  }


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
            <li className="exit_btn" onClick={()=>exit()}>Выход</li>
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
