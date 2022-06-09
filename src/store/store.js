import { combineReducers } from "redux";
import { createStore } from "redux";
import { reducer } from "../store/tasksstore/reducer.js";
import { newreducer } from "../store/inpstore/reduser.js";
 
 
 //Тут создаем стор, при помощи combineReducers добавляем в него два редьюсера
  export let store = createStore(combineReducers({ reducer, newreducer }));


 