import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  userSortByName,
  userSortByDate,
  userSortByNameREV,
  userSortByDateREV,
} from "../../store/action/addAction";

export function useUsers() {
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

  return {
    modulToggle,
    setModulToggle,
    userSearch,
    search,
    sortByName,
    sortByDate,
  };
}
