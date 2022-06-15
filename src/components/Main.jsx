import { Link, Routes, Route } from "react-router-dom";
import "../styles/main.css";
import Users from "./Users";
import Moduls from "./Moduls";
import Another from "./Another";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();

  //Delete toket, navigate to LoginPage
  let exit = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="flexwrapper">
        <div className="sidebar">
          <ul>
            <Link to={"/"}>
              <li>Users</li>
            </Link>
            <Link to={"moduls"}>
              <li>Moduls</li>
            </Link>
            <Link to={"another"}>
              {" "}
              <li>Another</li>
            </Link>
            <li className="exit_btn" onClick={() => exit()}>
              Exit
            </li>
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
