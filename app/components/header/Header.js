"use client";

import React, { useState } from "react";
import { Input, Space, Menu, Dropdown } from "antd";
import { SearchOutlined, DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./Header.module.css";

const { Search } = Input;

const industriesMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/airlines" className={styles.menuItem}>
        Airlines
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/airports" className={styles.menuItem}>
        Airports
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/air-traffic-control" className={styles.menuItem}>
        Air Traffic Control
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/owners-operators" className={styles.menuItem}>
        Owners and Operators
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/government" className={styles.menuItem}>
        Government
      </Link>
    </Menu.Item>
  </Menu>
);

const flightTrackingMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/delays-cancellations" className={styles.menuItem}>
        Delays and Cancellations
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/search-flights" className={styles.menuItem}>
        Search Flights
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/other" className={styles.menuItem}>
        Other
      </Link>
    </Menu.Item>
  </Menu>
);

const aboutUsMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/about" className={styles.menuItem}>
        About
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/careers" className={styles.menuItem}>
        Careers
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/history" className={styles.menuItem}>
        History
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/executive-team" className={styles.menuItem}>
        Executive Team
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/blog" className={styles.menuItem}>
        Blog
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link href="/webinars" className={styles.menuItem}>
        Webinars
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link href="/advertise" className={styles.menuItem}>
        Advertise with Us
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link href="/faqs" className={styles.menuItem}>
        FAQs
      </Link>
    </Menu.Item>
    <Menu.Item key="9">
      <Link href="/contact" className={styles.menuItem}>
        Contact Us
      </Link>
    </Menu.Item>
  </Menu>
);

const AppMenu = ({ isMobile, menuOpen, toggleMenu }) => {
  if (isMobile) {
    return (
      <>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        {menuOpen && (
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
        )}
      </>
    );
  }

  return (
    <Space className={styles.menu} size="large">
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
    </Space>
  );
};

const Header = ({ onLogoClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <img src="/icon.png" alt="Logo" />
        <span>SkyMap</span>
      </div>
      <Search
        placeholder="Search..."
        enterButton={<SearchOutlined />}
        style={{ maxWidth: 400, marginRight: 20 }}
        className={styles.searchBar}
      />
      <AppMenu isMobile={isMobile} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
