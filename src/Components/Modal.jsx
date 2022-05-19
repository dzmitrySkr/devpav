import "../Styles/modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";


function Modal({ text, modal, setModal }) {
  
  return (
    <div className={modal ? "modal" : "modal hide"}>
      <div className="close_modal" onClick={() => setModal(!modal)}>
        <AiOutlineCloseCircle />
      </div>
      <div className="text">
        <iframe
          frameBorder="no"
          src={
            text &&
            text.resources.find((item) => {
              if (item.uri.includes("txt")) {
                return item.uri;
              }
            }).uri
          }
        />
      </div>
    </div>
  );
}

export default Modal;
