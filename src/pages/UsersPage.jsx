import React from "react";
import "../styles/users.css";
import TableLine from "../components/userscopm/TableLine";
import TableTitleLine from "../components/userscopm/TableTitleLine";
import ModalAddUser from "../components/userscopm//ModalAddUser";
import LoadingPage from "./LoadingPage";
import { useUsers } from "../components/hooks/useUsers";

function Users() {
  let {
    modulToggle,
    setModulToggle,
    userSearch,
    search,
    sortByName,
    sortByDate,
  } = useUsers();

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

      <LoadingPage userSearch={userSearch} />
    </>
  );
}

export default React.memo(Users);
