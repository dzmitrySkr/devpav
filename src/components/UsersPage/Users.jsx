import { useEffect, useState } from "react";
import React from "react";
import "../../styles/users.css";
import TableLine from "./TableLine";
import TableTitleLine from "./TableTitleLine";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  userSortByName,
  userSortByDate,
  userSortByNameREV,
  userSortByDateREV,
} from "../../store/action/addAction";
import ModalAddUser from "./ModalAddUser";
import Loading from "../LoadingBck";

function Users() {
  const FULL_NAME_URL = process.env.REACT_APP_URL_USERS;
  const dispatch = useDispatch();
  const { storeUsers } = useSelector((state) => state);
  const [modulToggle, setModulToggle] = useState(false);
  const [userSearch, setUserSearch] = useState([]);

  // Load users from back in redux store (RS)
  useEffect(() => {
    const serch = async () => {
      let response = await fetch(`${FULL_NAME_URL}`);
      let searchusers = await response.json();
      storeUsers.lengths || dispatch(addUsers(searchusers));
    };
    serch().catch(console.error);
    console.log("save ti redux");
  }, []);

  //Save users from RS to variable
  useEffect(() => {
    setUserSearch(storeUsers);
    console.log("save to VARIABLE");
  }, [storeUsers]);

  //During searching we looking for coincidents in redux and save them in variable
  let search = (e) => {
    let a = storeUsers.filter((item) => {
      return item.firstName.toLowerCase().includes(e.toLowerCase());
    });
    setUserSearch(a);
  };

  //sort in RS by Name
  let sortByName = (setSortOnName, setSortOnDate, swich) => {
    swich ? dispatch(userSortByName()) : dispatch(userSortByNameREV());
    setSortOnName(true);
    setSortOnDate(false);
  };

  //sort in RS by Date
  let sortByDate = (setSortOnDate, setSortOnName, swich) => {
    swich ? dispatch(userSortByDate()) : dispatch(userSortByDateREV());
    setSortOnDate(true);
    setSortOnName(false);
  };

  return (
    <>
      <div className="title_wrapper">
        <div className="title">
          <h2>Users List</h2>
        </div>
        <div className="right">
          <div className="add_btn">
            <button
              className="add"
              onClick={() => {
                return setModulToggle(true);
              }}
            >
              Add user
            </button>
          </div>
          <div className="search">
            <input type="search_inp" onChange={(e) => search(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="table_title table_item">
        <TableTitleLine sortByName={sortByName} sortByDate={sortByDate} />
        {userSearch.map((fulluser) => (
          <TableLine fulluser={fulluser} key={fulluser.id} />
        ))}
      </div>

      <div
        onClick={() => setModulToggle(false)}
        className={modulToggle ? "shadow" : "shadow off"}
      ></div>

      <ModalAddUser modulToggle={modulToggle} setModulToggle={setModulToggle} />

      <Loading userSearch={userSearch} />
    </>
  );
}

export default React.memo(Users);
