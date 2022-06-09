const CREATE_STORE = "CREATE_STORE";
const CHANGE_STORE = "CHANGE_STORE";
const DELETE_STORE = "DELETE_STORE";

const createTask = (task = "55") => {
  return {
    type: CREATE_STORE,
    payloud: task,
  };
};

const changeTask = (id, e) => {
  return {
    type: CHANGE_STORE,
    payloud: { id: id, income: e },
  };
};

const deleteTask = (task) => {
  return {
    type: DELETE_STORE,
    payloud: task,
  };
};

export {
  CREATE_STORE,
  CHANGE_STORE,
  DELETE_STORE,
  createTask,
  deleteTask,
  changeTask,
};
