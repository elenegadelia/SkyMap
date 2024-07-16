"use client";

import React, { useState } from "react";
import { Input, Menu, Dropdown } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./Header.module.css";

const { Search } = Input;

const industriesMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="./airlines" legacyBehavior>
        <a className={styles.menuItem}>Airlines</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/airports" legacyBehavior>
        <a className={styles.menuItem}>Airports</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/air-traffic-control" legacyBehavior>
        <a className={styles.menuItem}>Air Traffic Control</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/owners-operators" legacyBehavior>
        <a className={styles.menuItem}>Owners and Operators</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/government" legacyBehavior>
        <a className={styles.menuItem}>Government</a>
      </Link>
    </Menu.Item>
  </Menu>
);

const flightTrackingMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/delays-cancellations" legacyBehavior>
        <a className={styles.menuItem}>Delays and Cancellations</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/search-flights" legacyBehavior>
        <a className={styles.menuItem}>Search Flights</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/other" legacyBehavior>
        <a className={styles.menuItem}>Other</a>
      </Link>
    </Menu.Item>
  </Menu>
);

const aboutUsMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/about" legacyBehavior>
        <a className={styles.menuItem}>About</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/careers" legacyBehavior>
        <a className={styles.menuItem}>Careers</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/history" legacyBehavior>
        <a className={styles.menuItem}>History</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/executive-team" legacyBehavior>
        <a className={styles.menuItem}>Executive Team</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/blog" legacyBehavior>
        <a className={styles.menuItem}>Blog</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link href="/webinars" legacyBehavior>
        <a className={styles.menuItem}>Webinars</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link href="/advertise" legacyBehavior>
        <a className={styles.menuItem}>Advertise with Us</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link href="/faqs" legacyBehavior>
        <a className={styles.menuItem}>FAQs</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="9">
      <Link href="/contact" legacyBehavior>
        <a className={styles.menuItem}>Contact Us</a>
      </Link>
    </Menu.Item>
  </Menu>
);

const AppMenu = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className={styles.mobileMenu}>
        <Dropdown overlay={industriesMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
            Industries <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown overlay={flightTrackingMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
            Flight Tracking <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown overlay={aboutUsMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
            About Us <DownOutlined />
          </a>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className={styles.menu}>
      <Dropdown overlay={industriesMenu} trigger={["hover"]}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          Industries <DownOutlined className={styles.arrowIcon} />
        </a>
      </Dropdown>
      <Dropdown overlay={flightTrackingMenu} trigger={["hover"]}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          Flight Tracking <DownOutlined className={styles.arrowIcon} />
        </a>
      </Dropdown>
      <Dropdown overlay={aboutUsMenu} trigger={["hover"]}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          About Us <DownOutlined className={styles.arrowIcon} />
        </a>
      </Dropdown>
    </div>
  );
};

const Header = ({ onLogoClick }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className={styles.header}>
      <Link href="/" legacyBehavior>
        <a onClick={onLogoClick} className={styles.logoContainer} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <img src="/icon.png" alt="Logo" className={styles.logo} />
          <span className={styles.logoText}>SkyMap</span>
        </a>
      </Link>
      <Search
        placeholder="Search..."
        enterButton={<SearchOutlined />}
        style={{ maxWidth: 400, marginRight: 20 }}
        className={styles.searchBar}
      />
      <AppMenu isMobile={isMobile} />
    </div>
  );
};

export default Header;
