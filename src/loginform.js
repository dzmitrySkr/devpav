import React from "react";
import { DatePicker,Form, Input, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';





function Login(){

    let getvalue = () => {
        console.log(`Имя пользователья - ${b} 
пароль - ${b}`)
    }
        

        let a;
        let b; 


    return(
        <div>

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
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(e) =>  a = e.target.value} />
      </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password onChange={(en) =>  b = en.target.value} />
            </Form.Item>


      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 7,
          span: 10,
        }}
      >
        <Checkbox>Remember me</Checkbox>
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
        </div>
    )
}

export default Login