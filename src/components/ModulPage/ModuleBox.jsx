import "../../styles/moduleBox.css";
import { useDispatch } from "react-redux";
import { deleteModule } from "../../store/action/modulsAction";

function ModuleBox({ item }) {
  let dispatch = useDispatch();
  return (
    <div className="module_box">
      <p className="module_name">{item.name}</p>
      <div
        className="colored first"
        style={{ backgroundColor: item.color }}
      ></div>
      <div
        className="colored second"
        style={{ backgroundColor: item.color }}
      ></div>

      <div
        className="delete_box"
        onClick={() => {
          dispatch(deleteModule(item));
        }}
      >
        &#128473;
      </div>
    </div>
  );
}

export default ModuleBox;
