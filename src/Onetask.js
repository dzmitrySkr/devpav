import { useEffect, useRef, useState } from "react";

function Onetask({ name, del, change }) {
  let [inputstate, setInputstate] = useState(true);

  let toggle = () => {
    inputstate ? setInputstate(false) : setInputstate(true);
  };

  return (
    <div className="flexcontainer">
      {inputstate ? (
        <p onClick={() => toggle()}>{name}</p>
      ) : (
        <input
          value={name}
          autoFocus
          className="input"
          onClick={() => toggle()}
          onKeyPress={(e) => (e.key === "Enter" ? toggle() : null)}
          onChange={(e) => change(e, name)}
        ></input>
      )}
      <div>
        <p className="inline" onClick={() => toggle()}>
          {" "}
          🙉{" "}
        </p>
        <p className="inline" onClick={() => del(name)}>
          ❌
        </p>
      </div>
    </div>
  );
}

export default Onetask;
