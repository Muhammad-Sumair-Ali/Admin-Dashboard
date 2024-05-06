import React from 'react'
import LayoutRes from '../components/Layout';
import { Layout, Typography, Button } from 'antd';
// import '../App.css'; 
import { DashboardOutlined, LoginOutlined, UserAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const FeatureItem = ({ icon, title, description }) => (
  <div style={{ marginBottom: '20px' }}>
    {icon && React.createElement(icon, { style: { fontSize: '24px', marginRight: '10px' } })}
    <span style={{ fontWeight: 'bold' }}>{title}</span>: {description}
  </div>)
  
  return (
    <LayoutRes> 
    <Layout className="layout">
      <Header>
        <div className="logo" />

      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div className="hero">
            <Title level={1}>Welcome to My Project </Title>
            <Paragraph>
              My Name is Muhammad Sumair Ali
              This Is a My Project By / Hadi e Learning we Are Completed our Project .
            </Paragraph>
         
          </div>
          <div className="features">
            <Title level={2}>Features</Title>
            <div>
    <FeatureItem
      icon={DashboardOutlined}
      title="Dashboard"
      description="Main interface for users, displaying key information and functionality."
    />
    <FeatureItem
      icon={LoginOutlined}
      title="Login"
      description="Authenticate users by providing credentials."
    />
    <FeatureItem
      icon={UserAddOutlined}
      title="Sign Up"
      description="Create new account by providing details and agreeing to terms."
    />
    <FeatureItem
      icon={UserOutlined}
      title="User Profile"
      description="View and manage account information and settings."
    />
    <FeatureItem
      icon={LogoutOutlined}
      title="Logout"
      description="Securely end session and log out of account."
    />
  </div>
          </div>
          
        </div>
      </Content>
      
    </Layout>
    </LayoutRes>
  );
}

export default Home;
