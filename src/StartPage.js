import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";
import "./start.css";
import FavoritePage from "./FavoritePage";
import { Provider } from "react-redux";
import store from "./store/store";

function StartPage() {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="saved" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default StartPage;
