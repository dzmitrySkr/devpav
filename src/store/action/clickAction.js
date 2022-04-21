let DEL_SEARCH = "DEL_SEARCH";
let ADD_SEARCH = "ADD_SEARCH";

function addsearch(item) {
  return {
    type: ADD_SEARCH,
    payload: item,
  };
}

function delsearch() {
  return {
    type: DEL_SEARCH,
  };
}

export { addsearch, delsearch };
