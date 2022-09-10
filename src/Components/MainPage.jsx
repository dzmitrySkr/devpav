import { useEffect, useState } from "react";
import TitleForAccounts from "./TitleForAccounts";
import Accounts from "./Accounts";
import LoadingBcg from "./LoadingBck";
import Footer from "./Footer";
import "../Styles/MainPage.scss";

let MainPage = () => {
  const ACCOUNTS = process.env.REACT_APP_URL_ACCOUNTS;

  let [users, setUsers] = useState([]);

  useEffect(() => {
    const serch = async () => {
      let response = await fetch(ACCOUNTS, {
        method: "GET",
        headers: { "x-apikey": "5d9f48133cbe87164d4bb12c" },
      });
      let searchusers = await response.json();
      setUsers(searchusers.filter((e) => e.id));
    };
    serch().catch(console.error);
  }, []);

  return (
    <>
      <h1 className="title">
        IG <span>GROUP</span>
      </h1>
      <section className="main_section">
      {!!users.length && <TitleForAccounts />}
      <LoadingBcg users={users} />
      {users.map((e) => (
        <Accounts user={e} key={e._id} />
      ))}
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
