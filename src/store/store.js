import { combineReducers, createStore } from "redux";
import favoriteReduser  from './reduser/favoriteReduser'


let combain = combineReducers({
    favorite: favoriteReduser
})

let store = createStore(combain)

export default store