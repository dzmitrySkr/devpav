import { useEffect, useState } from "react";
import React from "react";
import "../styles/users.css";
import TableLine from "./TableLine";
import TableTitleLine from "./TableTitleLine";
import { useDispatch, useSelector } from "react-redux";
import addReduser from "../store/redusers/addReduser";
import {
  addUsers,
  userSortByName,
  userSortByDate,
} from "../store/action/addAction";
import ModalAddUser from "./ModalAddUser";
import Loading from "./LoadingBck";

function Users() {
  let URL = process.env.REACT_APP_URL_USERS;
  let dispatch = useDispatch();
  let { storeUsers } = useSelector((state) => state);
  let [modulToggle, setModulToggle] = useState(false);
  let [userSearch, setUserSearch] = useState([]);
  let [shadow, setShadow] = useState(false);

  console.log(process.env.REACT_APP_URL_USERS);

  // Load users from back in redux store (RS)
  useEffect(() => {
    const serch = async () => {
      let response = await fetch(`${URL}`);
      let searchusers = await response.json();
      storeUsers.length || dispatch(addUsers(searchusers));
    };
    serch().catch(console.error);
  }, []);

  //Save users from RS to variable
  useEffect(() => {
    setUserSearch(storeUsers);
  }, [storeUsers]);

  //During searching we looking for coincidents in redux and save them in variable
  let search = (e) => {
    let a = storeUsers.filter((item) => {
      return item.firstName.toLowerCase().includes(e.toLowerCase());
    });
    setUserSearch(a);
  };

  //sort in RS by Name
  let sortByName = (setSortOnName, setSortOnDate) => {
    dispatch(userSortByName());
    setSortOnName(false);
    setSortOnDate(true);
  };

  //sort in RS by Date
  let sortByDate = (setSortOnDate, setSortOnName) => {
    dispatch(userSortByDate());
    setSortOnDate(false);
    setSortOnName(true);
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
                return setModulToggle(true), setShadow(true);
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
        {userSearch.map((item) => (
          <TableLine item={item} key={item.id} setShadow={setShadow} />
        ))}
      </div>
      <div className={shadow ? "shadow" : "shadow off"}></div>
      <ModalAddUser
        setShadow={setShadow}
        modulToggle={modulToggle}
        setModulToggle={setModulToggle}
      />

      <Loading userSearch={userSearch} />
    </>
  );
}

export default React.memo(Users);
