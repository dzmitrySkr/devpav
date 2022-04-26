let ADD_ITEM = "ADD_ITEM";
let DELL_ITEM = "DELL_ITEM";

function additem(data) {
  return {
    type: ADD_ITEM,
    payload: data,
  };
}

function dellitem() {
  return {
    type: DELL_ITEM,
  
  };
}

export {additem, dellitem};
