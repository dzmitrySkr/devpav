import { useEffect, useState } from "react";
import axios from "axios";

export function UseExhange() {
  let [euro, setEuro] = useState(0);
  let [dollar, setDollar] = useState(0);
  let [hryvnia, setHryvna] = useState(100);
  let [firstInp, setFirstInp] = useState("");
  let [secondInp, setSecondInp] = useState("");
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

  return {
    euro,
    dollar,
    hryvnia,
    firstInp,
    secondInp,
    firstSelect,
    secondSelect,
    checkFI,
    checkSE,
    setFirstSelect,
    setSecondSelect,
  };
}
