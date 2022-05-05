let ADD_ITEM = "ADD_ITEM";


function additem(data) {
  return {
    type: ADD_ITEM,
    payload: data,
  };
}



export {additem};
