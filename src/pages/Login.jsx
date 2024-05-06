import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useNavigate, NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const { email, password } = values;
    const foundUser = users.find(user => user.email === email && user.password === password);
    
    if (foundUser) {
      message.success('Login successful!');
      loginUser(foundUser); // Set user data using context
      navigate('/dashboard');
    } else {
      message.error('Invalid email or password');
    }
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Login Form </h2>
      <Form
        name="normal_login"
        className="login-form m-2 signup"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid Email!',
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        <Form.Item>
          <Button 
            style={{marginRight:"30px"}}
            type="primary" htmlType="submit" className="login-form-button">
            <i>Log in</i>
          </Button> 
          <NavLink to="/">Don't have an account? Sign Up</NavLink>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
