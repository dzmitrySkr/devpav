import "../Styles/modal.css";
import { addItem } from "../store/action/editAction";
import { useModal } from "../Hooks/useModal";

function Modal({ modal, setModal, setFavorite }) {
 
let {dispatch,
  request,
  setRequest,
  name,
  setName,
  setSort,
  count,
  setCount,
  saveModal,
  closeModal} = useModal(modal, setModal, setFavorite)

  return (
    <div className={modal ? "modal hide" : "modal"}>
      <div className="modal_title">
        <p>Сохранить запрос</p>
      </div>

      <div className="modal_request">
        <p>Запрос</p>
        <input
          value={request}
          className="modal_request_inp"
          onChange={(e) => setRequest(e.target.value)}
        ></input>
      </div>

      <div className="modal_name">
        <p>Название</p>
        <input
          value={name}
          className="modal_name_inp"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="modal_sort">
        <p>Сортировка</p>
        <select
          name="modal_sort_values"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date">date</option>
          <option value="rating">rating</option>
          <option value="viewCount">viewCount</option>
          <option value="title">title</option>
        </select>
      </div>

      <div className="modal_count">
        <p>Количество</p>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="range"
          id="cowbell"
          name="cowbell"
          min="1"
          max="50"
          step="1"
          value={count}
        />{" "}
        <span>{count}</span>
      </div>

      <div>
        <button
          onClick={() => {
            return closeModal(), dispatch(addItem(""));
          }}
          className="not_save"
        >
          Не сохранять
        </button>
        <button className="save" onClick={() => saveModal()}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default Modal;
