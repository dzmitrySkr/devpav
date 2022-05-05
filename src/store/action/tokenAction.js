let DEL_TOKEN = "DEL_TOKEN";
let ADD_TOKEN = "ADD_TOKEN";

function addToken(item) { 
  return {
    type: ADD_TOKEN,
    payload: item,
  };
}

function delToken() {
  return {
    type: DEL_TOKEN,
  };
}

export { addToken, delToken };
