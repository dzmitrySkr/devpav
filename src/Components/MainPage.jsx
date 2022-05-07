import { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/MainPageStyles.css'

function MainPage() {
  let [euro, setEuro] = useState(0);
  let [dollar, setDollar] = useState(0);
  let [hryvnia, setHryvna] = useState(100);
  let [firstInp, setFirstInp] = useState('');
  let [secondInp, setSecondInp] = useState('');
  let [firstSelect, setFirstSelect] = useState(hryvnia);
  let [secondSelect, setSecondSelect] = useState(hryvnia);

  let checkFI = (e) => {
    e.length < 15 && setFirstInp(e);
    setSecondInp(((e * secondSelect) / firstSelect).toFixed(2));
  };

  let checkSE = (e) => {
    e.length < 15 && setSecondInp(e);
    setFirstInp(((e * firstSelect) / secondSelect).toFixed(2));
  };

  useEffect(() => {
    checkFI(firstInp);
  }, [firstSelect]);

  useEffect(() => {
    checkFI(firstInp);
  }, [secondSelect]);

  useEffect(() => {
    axios
      .get(
        `https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2C%20EUR&base=uah`,
        { headers: { apikey: "G4xn3rFbMhuFCXjTHoziQP5Tt9i9EhCg" } }
      )
      .then((res) => {
        setEuro(res.data.rates.EUR * 100);
        setDollar(res.data.rates.USD * 100);
      });
  }, []);

  return (
    <>
      <header>
        <p>Курсы валют на сегодня:</p>
        <div className="flex_header" >
        <p>100 гривен = <span>{euro}</span> евро</p>
        <p>100 гривен = <span>{dollar}</span> доллара</p>
        </div>
      </header>
      <main>
        <p>За</p>
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
        <p>вы сможете купить</p>
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
          Made by <a href="https://dzmitryskr.github.io/introduse/">Dzmitry Skrypnik</a>
      </footer>
    </>
  );
}

export default MainPage;
