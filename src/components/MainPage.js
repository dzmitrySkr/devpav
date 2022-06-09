import { useEffect, useState } from "react";
import Tags from "./Tags.js";
import Onetask from "./Onetask.js";

import { useSelector, useDispatch } from "react-redux";
import { createTask } from "../store/tasksstore/action";

function Wrapper() {
  //с помощью useSelector достаем из редьюсера наш объект(стор)
  let app = useSelector((state) => state.reducer.tasks);

  //с помощью useDispatch достаем диспатчи из обекта стор
  let dispatch = useDispatch();

  let [activeTasks, setActiveTasks] = useState([]);

  //конролируемый searchInp
  let [searchInp, setSearchInp] = useState('') 

  //Интпут
  let [inp, setInp] = useState("");

  useEffect(() => {
    setActiveTasks(app);
  }, [app]);


  //поиск по тегу
  let tegSearch = (e) => {
    setSearchInp(e)
    let a = app.filter((item) => {
      return item.text.toLowerCase().includes(`${e?'#'+e:e}`.toLowerCase());
    });
    setActiveTasks(a);
  };

  return (
    <div className="main">
      <h1>My tasks</h1>
      {/* teg search */}
      <span># </span><input
        className="search_teg_input"
        placeholder="teg search"
        onChange={(e) => tegSearch(e.target.value)}
        value ={searchInp}
      ></input>

      <div className="task_wrapper">
         {/* tasks */}
      {activeTasks.map((task) => (
        <Onetask name={task.text} id={task.id} key={task.id} />
      ))}

      {activeTasks.length === 0 && <p>not found </p>}
      </div>

     
      {/* add new */}
      <input className="add_input" onChange={(e) => setInp(e.target.value)} value={inp}></input>
      <button
        onClick={() => {
          return dispatch(createTask(inp)), setInp("");
        }}
      >
        Add
      </button>


      {/* tags */}

      <Tags activeTasks={activeTasks} tegSearch={tegSearch} setInp={setInp}/>

    </div>
  );
}

export default Wrapper;
