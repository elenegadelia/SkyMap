"use client";

import React from 'react';
import { Input, Space, Menu, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import styles from './Header.module.css';

const { Search } = Input;

const industriesMenu = (
  <Menu>
    <Menu.Item key="1"><a className={styles.menuItem}>Airlines</a></Menu.Item>
    <Menu.Item key="2"><a className={styles.menuItem}>Airports</a></Menu.Item>
    <Menu.Item key="3"><a className={styles.menuItem}>Air Traffic Control</a></Menu.Item>
    <Menu.Item key="4"><a className={styles.menuItem}>Owners and Operators</a></Menu.Item>
    <Menu.Item key="5"><a className={styles.menuItem}>Government</a></Menu.Item>
  </Menu>
);

const flightTrackingMenu = (
  <Menu>
    <Menu.Item key="1"><a className={styles.menuItem}>Delays and Cancellations</a></Menu.Item>
    <Menu.Item key="2"><a className={styles.menuItem}>Search Flights</a></Menu.Item>
    <Menu.Item key="3"><a className={styles.menuItem}>Other</a></Menu.Item>
  </Menu>
);

const aboutUsMenu = (
  <Menu>
    <Menu.Item key="1"><a className={styles.menuItem}>About</a></Menu.Item>
    <Menu.Item key="2"><a className={styles.menuItem}>Careers</a></Menu.Item>
    <Menu.Item key="3"><a className={styles.menuItem}>History</a></Menu.Item>
    <Menu.Item key="4"><a className={styles.menuItem}>Executive Team</a></Menu.Item>
    <Menu.Item key="5"><a className={styles.menuItem}>Blog</a></Menu.Item>
    <Menu.Item key="6"><a className={styles.menuItem}>Webinars</a></Menu.Item>
    <Menu.Item key="7"><a className={styles.menuItem}>Advertise with Us</a></Menu.Item>
    <Menu.Item key="8"><a className={styles.menuItem}>FAQs</a></Menu.Item>
    <Menu.Item key="9"><a className={styles.menuItem}>Contact Us</a></Menu.Item>
  </Menu>
);

const AppMenu = () => {
  return (
    <Space className={styles.menu} size="large">
      <Dropdown overlay={industriesMenu}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          Industries <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={flightTrackingMenu}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          Flight Tracking <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={aboutUsMenu}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          About Us <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/icon.png" alt="Logo" />
        <span>SkyMap</span>
      </div>
      <Search
        placeholder="Search..."
        enterButton={<SearchOutlined />}
        style={{ maxWidth: 400, marginRight: 20 }}
      />
      <AppMenu />
    </div>
  );
};

export default Header;
