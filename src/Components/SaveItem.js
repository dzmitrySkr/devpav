import "../Styles/saveitem.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addsearch } from "../store/action/clickAction";
import { useNavigate } from "react-router";

function SaveItem({ item }) {
  let dispatch = useDispatch();
  let { click } = useSelector((store) => store);
  let navigate = useNavigate();

  let goMain = (item) => {
    dispatch(addsearch(item));
    navigate("../main");
  };

  return (
    <div className="item" onClick={() => goMain(item)}>
      <p>{item.name}</p>
    </div>
  );
}

export default SaveItem;
