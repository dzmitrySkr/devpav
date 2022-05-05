let DEL_SEARCH = "DEL_SEARCH";
let ADD_SEARCH = "ADD_SEARCH";

function addSearch(item) {
  return {
    type: ADD_SEARCH,
    payload: item,
  };
}

function delSearch() {
  return {
    type: DEL_SEARCH,
  };
}

export { addSearch, delSearch };
