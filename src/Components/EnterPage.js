import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


function EnterPage() {
  //Переключатель подсветки страниц логина и регистрации
  let [toggle, setToggle] = useState(true);

  return (
    <BrowserRouter>
      <Link to={"/"}>
        <button
          className={toggle ? "enter_button active" : "enter_button"}
          onClick={setToggle(!toggle)}
        >
          Log in
        </button>
      </Link>
      <Link to={"Register"}>
        <button
          className={!toggle ? "enter_button active" : "enter_button"}
          onClick={setToggle(!toggle)}
        >
          {" "}
          Register
        </button>
      </Link>
      <Link to={"mainPage"}></Link>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EnterPage;
