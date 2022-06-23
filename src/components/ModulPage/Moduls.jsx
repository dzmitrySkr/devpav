import { useSelector } from "react-redux/es/exports";
import ModuleBox from "./ModuleBox";
import '../../styles/moduleBox.css'
import ModuleModal from "./ModuleModal";
import { useState } from "react";

function Moduls() {
  let [toggleModal, setToggleModal] = useState(false)
  let { storeModules } = useSelector((store) => store);

  console.log(storeModules);

  return (
    <>
      <h2>Moduls</h2>

      <button className="add_module_btn" onClick={()=>setToggleModal(true)}>Add module</button>


      <div className="moduls_wrapper">
        {storeModules.map((item) => 
         <ModuleBox item={item} />
        )}
      </div>

      <ModuleModal toggleModal={toggleModal} setToggleModal={setToggleModal}/>
    </>
  );
}

export default Moduls;
