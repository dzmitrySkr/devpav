import "../Styles/MainPageStyles.css";
import { UseExhange } from "../Hooks/MainHook";

function MainPage() {
  let {
    euro,
    dollar,
    hryvnia,
    firstInp,
    secondInp,
    checkFI,
    checkSE,
    setFirstSelect,
    setSecondSelect,
  } = UseExhange();

  return (
    <>
      <header>
        <p>Exchange rate:</p>
        <div className="flex_header">
          <p>
            100 UAH = <span>{euro.toFixed(3)}</span> EUR
          </p>
          <p>
            100 UAH = <span>{dollar.toFixed(3)}</span> USD
          </p>
        </div>
      </header>
      <main>
        <p>For</p>
        <input
          type={"number"}
          onChange={(e) => checkFI(e.target.value)}
          value={firstInp}
        ></input>{" "}
        <select name="" onChange={(e) => setFirstSelect(e.target.value)}>
          <option value={hryvnia}>UAN</option>
          <option value={dollar}>USD</option>
          <option value={euro}>EUR</option>
        </select>
        <p>you can buy</p>
        <input
          type={"number"}
          onChange={(e) => checkSE(e.target.value)}
          value={secondInp}
        ></input>{" "}
        <select name="" onChange={(e) => setSecondSelect(e.target.value)}>
          <option value={hryvnia}>UAN</option>
          <option value={dollar}>USD</option>
          <option value={euro}>EUR</option>
        </select>
      </main>
      <footer>
        Made by{" "}
        <a href="https://dzmitryskr.github.io/introduse/">Dzmitry Skrypnik</a>
      </footer>
    </>
  );
}

export default MainPage;
