let ADD_SEARCH = "ADD_SEARCH";
let DEL_SEARCH = 'DEL_SEARCH'

let initialStore = [];

function clickReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return [action.payload];
    case DEL_SEARCH:
      return [];
  }

  return store;
}

export default clickReduser;
