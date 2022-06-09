import {  Provider } from "react-redux";
import MainPage from "./MainPage.js";
import { store } from "../store/store.js";
import { createStore } from "redux";


function TaskApp() {


  //Интпут

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default TaskApp;
