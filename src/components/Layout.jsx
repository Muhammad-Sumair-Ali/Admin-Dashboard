import React, { useState, useEffect } from "react";
import "../App.css";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import {
  ShopOutlined,
  CloudOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BulbOutlined,
  LoginOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const LayoutRes = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const { user, logoutUser } = useUser();

  const [collapsed, setCollapsed] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "1",
      name: "Home",
      path: "/home",
      label: "Home",
      icon: <HomeOutlined />,
    },

    {
      key: "4",
      icon: <VideoCameraOutlined />,
      label: "About",
      path: "/about",
    },
    {
      key: "2",
      name: "Contact",
      path: "/contact",
      label: "Contact",
      icon: <ShopOutlined />,
    },
    {
      key: "6",
      name: "Dashboard",
      path: "/dashboard",
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },

    {
      key: "8",
      icon: <TeamOutlined />,
      label: "Team",
      path: "/team",
    },
  ];

  return (
    <Layout className="h-100vh cnt" theme={themeMode}>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          theme={themeMode}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed} 
        >
          <div className="demo-logo-vertical" />
          <Menu
  theme={themeMode}
  mode="inline"
  selectedKeys={[location.pathname]}
>
  {items.map((item) => (
    <Menu.Item key={item.path} icon={item.icon}>
      <NavLink
        to={item.path}
        className="text-decoration-none"
        activeClassName="ant-menu-item-selected"
      >
        {item.label}
      </NavLink>
    </Menu.Item>
  ))}
  <Menu.Item
    key="themeToggler"
    onClick={toggleTheme}
    icon={themeMode === "light" ? <MoonOutlined /> : <BulbOutlined />}
  >
    {themeMode === "light" ? "Mode" : "Light Mode"}
  </Menu.Item>
</Menu>

          
        </Sider>
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 200,
          }}
        >
          <Header
            className="main-header"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1999,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              padding: 0,
              background: themeMode === "light" ? "#fff" : "#001529",
              color: themeMode === "light" ? "#000" : "#fff",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed} 
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                background: themeMode === "light" ? "#fff" : "#001529",
                color: themeMode === "light" ? "#000" : "#fff",
              }}
            />
            <div className="user">
              {user ? (
                <div className="user-i">
                  <i
                    style={{
                      fontSize: "30px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    className="mx-3 pb-3 cursor-pointer logout"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="LOG OUT"
                    onClick={logoutUser}
                  >
                    <LoginOutlined />
                  </i>
                  <img
                    id="username"
                    className=" pb-2 usericon d-inline-block rounded-2"
                    src={`https://ui-avatars.com/api/?name=${user.fullName}`}
                    alt="User Avatar"
                  />
                  <label className="m-1 px-2" htmlFor="username">
                    {user.fullName}
                  </label>
                </div>
              ) : (
                <p>
                  Please log in to view your profile.
                  <NavLink to="/login">
                    <Button className="mx-3 btn btn-primary" variant="primary">
                      Login
                    </Button>
                  </NavLink>
                </p>
              )}
            </div>
          </Header>

          <Content
            style={{
              boxSizing:"border-box",
              padding: "0px",
              overflow: "initial",
              background: themeMode === "light" ? "#f2f2f2" : "#f1f1f1",
              color: themeMode === "light" ? "#000" : "#000",
            }}
          >

            <div
              style={{
                textAlign: "center",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              background: themeMode === "light" ? "#fff" : "#001529",
              color: themeMode === "light" ? "#000" : "#fff",
            }}
          >
             CopyRight ©{new Date().getFullYear()} Created by Muhammad Sumair
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutRes;
