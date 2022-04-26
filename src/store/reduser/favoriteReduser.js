let ADD_ITEM = "ADD_ITEM";
let DELL_ITEM = "DELL_ITEM";

let initialStore = [];

function favoriteReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...store, action.payload];
    case DELL_ITEM:
      return [];
  }

  return store;
}

export default favoriteReduser;
