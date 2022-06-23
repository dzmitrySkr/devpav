import "../../styles/modulModal.css";
import { useState } from "react";
import { CirclePicker } from "react-color";
import { useDispatch } from "react-redux";
import {addModule} from '../../store/action/modulsAction'


function ModuleModal({ toggleModal, setToggleModal }) {
  let [color, setColor] = useState("");
  let [input, setInput] = useState("");
  let dispatch = useDispatch()


    let sumbitModal= () => {
        if (color||input){
            let obj = {name:input, color:color}
            dispatch(addModule(obj))
            cancel()
        }
    }

    let cancel = () => {
        setToggleModal(false);
        setColor('');
        setInput('');
    }

  return (
    <>
      <div
        className={
          toggleModal
            ? "module_modal_box"
            : "module_modal_box module_modal_box_off"
        }
      >
        <h3>Add module</h3>
        <p className="modal_modul_title">Modul name:</p>
        <input onChange={(e)=>setInput(e.target.value)} value={input}></input>
        <p className="modal_modul_title">Choose color</p>


        <CirclePicker
          circleSize={25}
          circleSpacing={12}
          onChange={(color, event) => setColor(color.hex)}
        />


        <div className="modul_modal_buttons">
            <button className="modul_modal_button" onClick={()=>{sumbitModal()}}>Sumbit</button>
            <button className="modul_modal_button" onClick={() => cancel()}>Cansel</button>
        </div>

        <div
          className="close_modul_modal"
          onClick={() => cancel()}
        >
          &#128473;
        </div>
      </div>
    </>
  );
}

export default ModuleModal;
