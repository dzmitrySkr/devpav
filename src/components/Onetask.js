import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeTask } from "../store/tasksstore/action";
import { createInp } from "../store/inpstore/action";
// import parse from "html-react-parser";

function Onetask({ name, id }) {
  let [inputstate, setInputstate] = useState(true);
  let parse = require("html-react-parser");
  let secStore = useSelector((state) => state.newreducer);
  let dispatch = useDispatch();

  //переключение инпута и тега P
  let toggle = () => {
    dispatch(createInp(name));
    !inputstate && dispatch(changeTask(id, secStore.input));
    !inputstate && dispatch(createInp(""));
    setInputstate(!inputstate);
  };

  //Делаем парсинг для отображения тега спан, если мы его нашли)))
  let parseName = parse(
    name
      .split(" ")
      .map((element) => {
        return element.includes("#") ? `<span> ${element} </span>` : element;
      })
      .join(" ")
  );

  return (
    <div className="flexcontainer">
      {inputstate ? (
        <p className="title_task " onClick={() => toggle()}>
          {parseName}
        </p>
      ) : (
        <input
          value={secStore.input}
          autoFocus
          className="title_input input"
          onClick={() => toggle()}
          onKeyPress={(e) => e.key === "Enter" && toggle()}
          onChange={(e) => dispatch(createInp(e.target.value))}
          onBlur={() => toggle()}
        ></input>
      )}

      <div className="icons">
        <p className="inline" onClick={() => toggle()}>
          {" "}
          ✏️{" "}
        </p>
        <p className="inline" onClick={() => dispatch(deleteTask(name))}>
          ❌
        </p>
      </div>
    </div>
  );
}

export default Onetask;
