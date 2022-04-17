import { Form, Input, Button, Checkbox } from "antd";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import axios from "axios";
import "./antd-change.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);

    navigate("main");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Link to={"/"}>
        <button className="enter_button active">Log in</button>
      </Link>
      <Link to={"register"}>
        <button className="enter_button"> Register</button>
      </Link>

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
