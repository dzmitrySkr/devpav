let ADD_ITEM = "ADD_ITEM";

let initialStore = {};

function editReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_ITEM:
      return action.payload;
  }

  return store;
}

export default editReduser;
