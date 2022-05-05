import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import axios from "axios";
import "../Styles/antd-change.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoken } from "../store/action/tokenAction";


function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();


  const onFinish = (values) => {
    axios
      .post("https://typ-back-end.herokuapp.com/api/login", {
        login: values.username,
        password: values.password,
      })
      .then((res) => {
        if (res.data.isAuth) {
          dispatch(addtoken(res.data.token.split('.')[0]));
          navigate("main");
          localStorage.setItem('token', res.data.token.split('.')[0])
        }})

  };

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  return (
    <>
      <Link to={"/"}>
        <button className="enter_button active">Log in</button>
      </Link>
      <Link to={"register"}>
        <button className="enter_button"> Register</button>
      </Link>
      <div>www@mail.ru As!#@123123</div>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 4,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          defaultValue="www@mail.ru"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          defaultValue="As!#@123123"
          rules={[
            {
              
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 10,
            span: 4,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginPage;
