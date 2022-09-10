import { useEffect, useState } from "react";
import "../Styles/Account.scss";
import LoaderPulse from "./LoaderPulse";

let Accounts = ({ user }) => {
  const ACCOUNTTYPES = process.env.REACT_APP_URL_ACCOUNTTYPES;
  let [accountType, setAccountType] = useState();

  useEffect(() => {
    const serch = async () => {
      let response = await fetch(ACCOUNTTYPES, {
        method: "GET",
        headers: { "x-apikey": "5d9f48133cbe87164d4bb12c" },
      });
      let searchusers = await response.json();
      let myUser = searchusers.filter((e) => e.id === user.accountType);
      setAccountType(myUser[0].title);
    };
    serch().catch(console.error);
  }, []);

  
  return (
    <>
      <div className="account_box">
        <div className="account_item account_name">{user.name}</div>
        <div className="account_item account_profit">{`${user.currency} ${user.profitLoss}`}</div>
        <div className="account_item account_type">
          {accountType ? accountType : <LoaderPulse />}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Accounts;
