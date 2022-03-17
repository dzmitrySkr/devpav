import React, { Fragment } from "react";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import {
  HashRouter,
  Route,
  Link,
  Routes,
  useLocation,
  Outlet,
  useParams,
  Router,
  BrowserRouter,
} from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <h1>Welcome to my Form</h1>

      <Button type="primary">
        <Link to="/login">Login</Link>
      </Button>

      <Button type="primary">
        <Link to="/reg">Registration</Link>
      </Button>

      <br/>

      <Button type="primary">
        <Link to="/loginnativ">Login Native</Link>
      </Button>

      <Button type="primary">
        <Link to="/regnativ">Registration Native</Link>
      </Button>



    </Fragment>
  );
}

export default Home;
