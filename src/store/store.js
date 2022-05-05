import { combineReducers, createStore } from "redux";
import editReduser  from './reduser/editReduser'
import clickReduser from './reduser/clickReduser'
import tokenReduser from './reduser/tokenReduser'


let combain = combineReducers({
    edit: editReduser,
    click: clickReduser,
    token:tokenReduser
})

let store = createStore(combain)

export default store