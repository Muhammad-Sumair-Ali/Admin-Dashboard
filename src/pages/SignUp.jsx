import React, { useState } from 'react';
import { UserOutlined, LockOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import "../App.css";
import { Button, Checkbox, Form, Input, Upload, message } from 'antd';
import {useNavigate ,NavLink } from 'react-router-dom';


const SignUp = () => {
  const [imageUrl, setImageUrl] = useState(null);
 const navigate = useNavigate();
  const onFinish = (values) => {
    // Save user data 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      profileImage: imageUrl,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    message.success('Registration successful!');
    console.log(users);
    navigate('/login');
  };

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    return false;
  };

  return (
    <> 
      <h2 style={{textAlign:"center",marginTop:"50px",fontFamily:"sans-serif"}}>SignUp And Register Account First </h2>
    <Form
      name="normal_signup"
      className="signup-form m-2 signup"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your Full Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="profileImage"
        valuePropName="fileList"
        getValueFromEvent={beforeUpload}
      >
        <Upload
          name="profileImage"
          listType="picture"
          accept="image/*"
          beforeUpload={beforeUpload}
        >
          <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
         
          <NavLink to="/login">I have already Acoun Login</NavLink>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form-button">
         <b> Sign UP</b> 
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default SignUp;
