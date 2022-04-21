let DEL_TOKEN = "DEL_TOKEN";
let ADD_TOKEN = "ADD_TOKEN";

function addtoken(item) { 
  return {
    type: ADD_TOKEN,
    payload: item,
  };
}

function deltoken() {
  return {
    type: DEL_TOKEN,
  };
}

export { addtoken, deltoken };
