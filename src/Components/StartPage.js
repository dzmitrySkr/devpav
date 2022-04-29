import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";
import "../Styles/start.css";
import FavoritePage from "./FavoritePage";
import { Provider } from "react-redux";
import store from "../store/store";
import ProtectedRoute from "../ProtectedRouts/ProtectedRouts";

function StartPage() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="saved" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default StartPage;
