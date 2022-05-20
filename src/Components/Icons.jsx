import { useState } from "react";
import "../Styles/mainpage.css";
import { BsList, BsFillGrid3X3GapFill } from "react-icons/bs";
import "../Styles/mainpage.css";

function Icons({ setLayout, layout }) {
  return (
    <div className="icons">
      <div
        className={layout ? "icon icon_col icon_active" : "icon icon_col"}
        onClick={() => setLayout(true)}
      >
        <BsList />
      </div>
      <div
        className={layout ? "icon icon_row" : "icon icon_row icon_active"}
        onClick={() => setLayout(false)}
      >
        <BsFillGrid3X3GapFill />
      </div>
    </div>
  );
}

export default Icons;
