import { defaultIconPrefixCls } from "antd/lib/config-provider";
import { useState } from "react";
import "./RegNative.css";
import "./LogNativ.css";

function RegNative() {
  let [reg, setReg] = useState({
    ifstartpage: true,
  });

  return (
    <form>
      <h2>Please, enter your secret information</h2>
      <p className="username formtitle">
        <span className="span">* </span> Username:
      </p>{" "}
      <input
        type={"text"}
        onChange={(e) => setReg({ ...reg, Username: e.target.value })}
      />
      <p>Какой Ваш рост</p>
      <div className="hight">
        <input
          type={"radio"}
          name={"hight"}
          id={"first"}
          value={"Ниже 160 см"}
          onChange={(e) => setReg({ ...reg, hight: e.target.value })}
        />
        <label>Ниже 160 см</label>

        <input
          type={"radio"}
          name={"hight"}
          id={"second"}
          value={"От 160 до 170 см"}
          onChange={(e) => setReg({ ...reg, hight: e.target.value })}
        />
        <label>От 160 до 170 см</label>

        <input
          type={"radio"}
          name={"hight"}
          id={"third"}
          value={"От 170 до 180 см"}
          onChange={(e) => setReg({ ...reg, hight: e.target.value })}
        />
        <label>От 170 до 180 см</label>

        <input
          type={"radio"}
          name={"hight"}
          id={"fourth"}
          value={"Выше 180 см"}
          onChange={(e) => setReg({ ...reg, hight: e.target.value })}
        />
        <label>Выше 180 см</label>
      </div>
      <p className="mail formtitle">
        <span className="span">* </span> E-mail:
      </p>{" "}
      <input
        type={"text"}
        onChange={(e) => setReg({ ...reg, "E-mail": e.target.value })}
      />
      <br />
      <p className="age formtitle">
        <span className="span">* </span> Age:
      </p>{" "}
      <input
        type={"number"}
        min={"1"}
        max={"99"}
        onChange={(e) => setReg({ ...reg, Age: e.target.value })}
      />
      <br />
      <p>Сделать страницу стартовой?</p>
      <label className="switch">
        <input
          type={"checkbox"}
          onChange={(e) => setReg({ ...reg, ifstartpage: e.target.checked })}
          checked={reg.ifstartpage}
        />
        <span class="slider round"></span>
      </label>
      <br />
      <p className="password formtitle">
        <span className="span">* </span> Password:
      </p>{" "}
      <input
        type={"password"}
        onChange={(e) => setReg({ ...reg, password: e.target.value })}
        value={reg.password}
      />
      <br />{" "}
      <input
        className="smbbtn"
        type={"button"}
        value={"Sumbit"}
        onClick={() => console.log(reg)}
      />
    </form>
  );
}

export default RegNative;
