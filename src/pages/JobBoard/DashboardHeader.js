import { Dropdown, Layout, Menu, Space, message, Typography } from "antd";
import { useEffect, useState } from "react";
import Jobs from "./Jobs";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/user/user";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

const { Title } = Typography;
const DashboardHeader = () => {
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    console.log("click left button", e);
    navigate("/home/profile");
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Logout",
      key: "2",
      icon: <UserOutlined />,
      danger: true,
    },
  ];
  const handleMenuClick = (e) => {
    console.log(items);
    if (Number(e.key) === items.length) {
      message.info("Logged Out");
      dispatch(logout());
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  let RightSideMenu = () => {
    return (
      <>
        {isLoggedIn === true ? (
          <div style={{ display: "flex" }}>
            <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
              <UserOutlined /> Profile
            </Dropdown.Button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <Header style={headerStyle} theme="light">
      <Link to="/home">
        <Title
          style={{ color: "#fff", marginTop: "12px", margin: "auto 30px" }}
        >
          Workhunt
        </Title>{" "}
      </Link>
      <RightSideMenu />
    </Header>
  );
};
export default DashboardHeader;
