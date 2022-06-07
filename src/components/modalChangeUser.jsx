import Item from "antd/lib/list/Item";
import { useEffect, useState } from "react";
import "../styles/modalChange.css";
import { useDispatch } from "react-redux";
import { changeNameR } from "../store/action/addAction";

function ModalChangeUser({
  toggleModalChUser,
  setToggleModalChUser,
  item,
  setShadow,
}) {
  let [persent, setPersent] = useState(0);
  let [days, setDays] = useState(0);
  let [toggleName, setToggleName] = useState(true);
  let [name, setName] = useState(`${item.firstName} ${item.lastName}`);
  let dispatch = useDispatch();
  console.log(item);

  useEffect(() => {
    let done = item.progress.filter((item) => item.status);
    setPersent(((done.length * 100) / item.progress.length).toFixed(2));
    let time =
      new Date().getTime() -
      new Date(item.updatedAt.split("T")[0].split("-").join("-")).getTime();
    setDays(Math.floor(time / 86400000));
  }, []);

  let changeName = () => {
    setToggleName(!toggleName);
    dispatch(changeNameR(item.id, name));
  };

  return (
    <>
      <div className={toggleModalChUser ? "modal_change" : "modal_change off"}>
        <div
          className="close_modal"
          onClick={() => {
            return setShadow(false), setToggleModalChUser(false);
          }}
        >
          &#128473;
        </div>

        {toggleName ? (
          <div className="user_name">
            {item.firstName} {item.lastName}
          </div>
        ) : (
          <input value={name} onChange={(e) => setName(e.target.value)} />
        )}

        <button onClick={() => changeName()}>click</button>

        <hr></hr>
        <h2 className="prigress_title">ПРОГРЕСС</h2>
        <div className="progress_wrapprer">
          <div className="progress_line">
            <div
              className="progress_line_full"
              style={{ width: `${Number(persent)}%` }}
            ></div>
          </div>
          <div className="progress_persent">
            <p>{persent} %</p>
          </div>
        </div>

        <hr></hr>

        <div className="tasks_wrapper">
          <div className="tasks_box">
            <p className="tasks_title">School days</p>
            <p className="tasks_answer">{days} Days</p>
          </div>

          <div className="tasks_box">
            <p className="tasks_title">Taska done</p>
            <p className="tasks_answer">
              {item.progress.filter((item) => item.status).length}/
              {item.progress.length}
            </p>
          </div>

          <div className="tasks_box">
            <p className="tasks_title">Check lists</p>
            <p className="tasks_answer">3/5</p>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default ModalChangeUser;
