// app/components/Header.js
"use client";

import { Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";

const { Search } = Input;

const Header = () => {
  return (
    <div className={styles.header}>
      <Menu mode="horizontal" className={styles.menu}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
      <div className={styles.searchContainer}>
        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          className={styles.search}
        />
      </div>
    </div>
  );
};

export default Header;
