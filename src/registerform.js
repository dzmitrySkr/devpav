import React from "react";
import { DatePicker,Form, Input, Checkbox, Button, InputNumber, Radio, Switch } from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'

function Reg(){

    


  const [value, setValue] = React.useState(1);


  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

    return(
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
                message: 'Please input your username!',
            },
            ]}
        >
            <Input />
      </Form.Item>

       <p>Какой у вас рост ? </p>
      <Radio.Group onChange={onChange} value={value} >
      <Radio value={1}>меньше 160</Radio>
      <Radio value={2}>от 160 до 170</Radio>
      <Radio value={3}>от 170 до 180</Radio>
      <Radio value={4}>выше 180</Radio>
    </Radio.Group>



      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
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
                    message: 'Please input your password!',
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
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>


        </Form>

        </div>
    )
}

export default Reg