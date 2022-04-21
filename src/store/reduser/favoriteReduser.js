let ADD_ITEM = "ADD_ITEM";

let initialStore = [];

function favoriteReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...store, action.payload];
  }

  return store;
}

export default favoriteReduser;
