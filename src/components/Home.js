import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({addactive}) {
  const history = useNavigate();

  let routeToComp = () =>{
    document.querySelectorAll(".item").forEach((n) => n.classList.remove("active"));
    document.querySelector(".components").classList.add("active");
    history("components")
  }

  return (
    <div className="image_container">
      <button onClick={() => routeToComp() }>Lests start</button>

      <img
        className="image"
        src="https://i.ibb.co/ZWp70Xq/pngegg.png" alt="React image"
      ></img>
    </div>
  );
}

export default Home;
