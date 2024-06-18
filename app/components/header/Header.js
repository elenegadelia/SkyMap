'use client'
import { Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const Header = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          style={{ maxWidth: "400px" }}
        />
        <Menu mode="horizontal">
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
