import {  Provider } from "react-redux";
import MainPage from "./MainPage.js";
import { store } from "../store/store.js";



function TaskApp() {

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default TaskApp;
