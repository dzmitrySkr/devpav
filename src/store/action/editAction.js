let ADD_ITEM = "ADD_ITEM";


function addItem(data) {
  return {
    type: ADD_ITEM,
    payload: data,
  };
}



export {addItem};
