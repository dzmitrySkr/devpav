let ADD_TOKEN = "ADD_TOKEN";
let DEL_TOKEN = 'DEL_TOKEN'

let initialStore = '';

function tokenReduser(store = initialStore, action) {
  switch (action.type) {
    case ADD_TOKEN:
      return action.payload;
    case DEL_TOKEN:
      return '';
  }

  return store;
}

export default tokenReduser;
