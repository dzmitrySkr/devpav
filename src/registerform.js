import React, {Fragment, useState} from "react";
import {
  DatePicker,
  Form,
  Input,
  Checkbox,
  Button,
  InputNumber,
  Radio,
  Switch,
} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

function Reg() {

  const [login, setLogin] = useState({

  });

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    console.log(e);
    setLogin({ ...login, hight: e.target.value })
  };



  return (
    <div>
      <h1>Please, enter your secret information</h1>
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
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="on"
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
          <Input  onChange={(e) => {
              e.target.value === "dima"
                ? setLogin({ ...login, username: 'Erorr' })
                : setLogin({ ...login, username: e.target.value });
            }} />
        </Form.Item>

        <p>Какой у вас рост ? </p>
        <Radio.Group onChange={onChange} >
          <Radio value={"меньше 160"}>меньше 160</Radio>
          <Radio value={"от 160 до 170"}>от 160 до 170</Radio>
          <Radio value={"от 170 до 180"}>от 170 до 180</Radio>
          <Radio value={"выше 180"}>выше 180</Radio>
        </Radio.Group>

        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input onChange={(e) => {
              e.target.value === "dima"
                ? setLogin({ ...login, "e-mail": 'Erorr' })
                : setLogin({ ...login, "e-mail": e.target.value });
            }} />
        </Form.Item>

        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber onChange={(e) => {
            console.log(e);
            }} />
        </Form.Item>

        <p>Хотите сделать страницу стратовой?</p>

        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />

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
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={() => console.log(login)}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Reg;
