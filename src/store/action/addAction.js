let ADD_USERS = "ADD_USERS";
let SAVE_USER = "SAVE_USER";
let SORT_BY_NAME = "SORT_BY_NAME";
let SORT_BY_DATE = "SORT_BY_DATE";
let CHANGE_NAME = "CHANGE_NAME";

function addUsers(item) {
  return {
    type: ADD_USERS,
    payload: item,
  };
}

function saveUser(item) {
  return {
    type: SAVE_USER,
    payload: item,
  };
}

function userSortByDate() {
  return {
    type: SORT_BY_DATE,
  };
}

function userSortByName() {
  return {
    type: SORT_BY_NAME,
  };
}

function changeNameR(id, item) {
  console.log(item);
  return {
    type: CHANGE_NAME,
    payload: { id: id, item: item },
  };
}

export { addUsers, saveUser, userSortByName, userSortByDate, changeNameR };
