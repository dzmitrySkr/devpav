import { combineReducers, createStore } from "redux";
import addReduser from '../store/redusers/addReduser.js'


let combain = combineReducers({
    storeUsers: addReduser,
    
})

let store = createStore(combain)

export default store