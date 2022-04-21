import { combineReducers, createStore } from "redux";
import favoriteReduser  from './reduser/favoriteReduser'
import clickReduser from './reduser/clickReduser'
import tokenReduser from './reduser/tokenReduser'


let combain = combineReducers({
    favorite: favoriteReduser,
    click: clickReduser,
    token:tokenReduser
})

let store = createStore(combain)

export default store