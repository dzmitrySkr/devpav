import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";
import "../Styles/start.css";
import FavoritePage from "./FavoritePage";
import { Provider } from "react-redux";
import store from "../store/store";
import ProtectedRouteLogin from "../ProtectedRouts/ProtectedRoutsLogin";
import ProtectedRouteMain from "../ProtectedRouts/ProtectedRoutsMain";

function StartPage() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRouteLogin />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route element={<ProtectedRouteMain />}>
            <Route path="main" element={<MainPage />} />
            <Route path="saved" element={<FavoritePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default StartPage;
