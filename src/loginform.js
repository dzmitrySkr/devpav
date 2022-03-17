import React, { Fragment, useState } from "react";
import { DatePicker, Form, Input, Checkbox, Button } from "antd";

function Login() {
  let getvalue = () => {
    console.log(login);
  };

  let [login, setLogin] = useState({
    remember: true,
    username: '',
    password: '',
  });

  return (
    <Fragment>
      <h1>Hi, enter your magic world</h1>
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
        autoComplete="off"
      >
       <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              e.target.value === "dima"
                ? setLogin({ ...login, username: 'Erorr' })
                : setLogin({ ...login, username: e.target.value });
            }}
            value = {login.username}
          />
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
          <Input.Password  onChange={(e) => {
              e.target.value === "dima"
                ? (login.password = "Erorr")
                : setLogin({ ...login, password: e.target.value });
            }} value = 'scsc' />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 7,
            span: 10,
          }}
        >
          <Checkbox onChange={(e) => {
            setLogin({ ...login, remember: e.target.checked });
            }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={getvalue}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default Login;
