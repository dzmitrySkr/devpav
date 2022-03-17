import { useState } from "react";
import "./LogNativ.css";

let LoginNative = () => {
  let [login, setLogin] = useState({
    remember: true,
  });

  let valid = (e) => {
    e.target.value === "dima"
      ? setLogin({ ...login, username: "КрасавчиК" })
      : setLogin({ ...login, username: e.target.value });
  };

  return (
    <form>
      <h2>Hi, enter your magic world</h2>
      <p className="username formtitle">
        <span className="span">* </span> Username:
      </p>{" "}
      <input type={"text"} onChange={(e) => valid(e)} value={login.username} />{" "}
      <br />
      <p className="password formtitle">
        <span className="span">* </span> Password:
      </p>{" "}
      <input
        type={"password"}
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
        value={login.password}
      />{" "}
      <br />
      <input
        className="checkbox"
        onChange={(e) => setLogin({ ...login, remember: e.target.checked })}
        checked={login.remember}
        type={"checkbox"}
      />{" "}
      <p className="formtitle">Remember Me</p>
      <br />
      <input
        className="smbbtn"
        type={"button"}
        value={"Sumbit"}
        onClick={() => console.log(login)}
      />
    </form>
  );
};

export default LoginNative;
