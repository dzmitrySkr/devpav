import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function EnterPage(){

    let addactive = (e) => {

        document.querySelectorAll(".enter_button").forEach((n) => n.classList.remove("active"));
        e.target.classList.add("active");
        console.log(window.location.pathname = 'mainPage' );
    };

    return(

        <BrowserRouter>

        <Link to={"/"}>
          <button className="enter_button active" onClick={(e) => addactive(e)} >Log in</button>
        </Link>
        <Link to={"Register"}>
          <button className="enter_button" onClick={(e) => addactive(e)}> Register</button>
        </Link>
        <Link to={"mainPage"}></Link>
  
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
  
      </BrowserRouter>
    )

}


export default EnterPage