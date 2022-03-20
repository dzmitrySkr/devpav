import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Components from "./Components";
import Props from "./Props";
import Home from "./Home";
import State from "./State";
import Lifestyle from './Lifestyle'
import Events from './Events'
import Key from './Key'
import Vdom from "./Vdom";
import Refs from "./Refs";
import Asrequest from "./Asrequest";
import Context from "./Context";
import Form from "./Form";
import Routerr from "./Routerr";
import Fragment from "./Fragment";
import Memo from "./Memo";

function App() {


  let addactive = (e) => {

    if (e.target !== e.currentTarget) {
      document.querySelectorAll(".item").forEach((n) => n.classList.remove("active"));
      e.target.classList.add("active");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex_container">
          <div className="menu " onClick={(e) => addactive(e)}>
            <Link to={"/"}>
              <div className="item home active">home </div>{" "}
            </Link>
            <Link to={"components"}>
              <div className="item home">Components</div>{" "}
            </Link>
            <Link to={"props"}>
              <div className="item home">Props</div>{" "}
            </Link>
            <Link to={"state"}>
              <div className="item home">State</div>
            </Link>
            <Link to={"lifestyle"}>
              <div className="item home">Lifestyle</div>
            </Link>
            <Link to={"events"}>
              <div className="item home">Events</div>
            </Link>
            <Link to={"key"}>
              <div className="item home">Key</div>
            </Link>
            <Link to={"refs"}>
              <div className="item home">Refs</div>
            </Link>
            <Link to={"asrequest"}>
              <div className="item home">Asinchronous request</div>
            </Link>
            <Link to={"vdom"}>
              <div className="item home">Virtual Dom</div>
            </Link>

            <Link to={"fragment"}>
              <div className="item home">Fragment</div>
            </Link>
            <Link to={"reactmemo"}>
              <div className="item home">React.memo</div>
            </Link>
            <Link to={"useeffect"}>
              <div className="item home">useEffect</div>
            </Link>
            <Link to={"router"}>
              <div className="item home">Router</div>
            </Link>
            <Link to={"context"}>
              <div className="item home">Context</div>
            </Link>
            <Link to={"form"}>
              <div className="item home">Form</div>
            </Link>
          </div>

          <div className="article">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="components" element={<Components />} />
              <Route path="props" element={<Props />} />
              <Route path="state" element={<State />} />
              <Route path="lifestyle" element={<Lifestyle />} />
              <Route path="events" element={<Events />} />
              <Route path="key" element={<Key />} />
              <Route path="refs" element={<Refs />} />
              <Route path="asrequest" element={<Asrequest />} />
              <Route path="vdom" element={<Vdom />} />

              <Route path="fragment" element={<Fragment />} />
              <Route path="reactmemo" element={<Memo />} />
              <Route path="useeffect" element={<useEffect />} />
              <Route path="router" element={<Routerr />} />
              <Route path="context" element={<Context />} />
              <Route path="form" element={<Form />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
