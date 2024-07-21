'use client';

import React, { useState, useEffect } from 'react';
import { Input, Menu, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Header.module.css';

const { Search } = Input;

const industriesMenu = [
  {
    key: '1',
    label: (
      <Link href='./airlines' legacyBehavior>
        <a className={styles.menuItem}>Airlines</a>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href='/airports' legacyBehavior>
        <a className={styles.menuItem}>Airports</a>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/owners-operators' legacyBehavior>
        <a className={styles.menuItem}>Owners and Operators</a>
      </Link>
    ),
  },
];

const flightTrackingMenu = [
  {
    key: '1',
    label: (
      <Link href='/delays-cancellations' legacyBehavior>
        <a className={styles.menuItem}>Delays and Cancellations</a>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href='/weather' legacyBehavior>
        <a className={styles.menuItem}>Weather</a>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/baggage' legacyBehavior>
        <a className={styles.menuItem}>Baggage Information</a>
      </Link>
    ),
  },
];

const aboutUsMenu = [
  {
    key: '1',
    label: (
      <Link href='/about' legacyBehavior>
        <a className={styles.menuItem}>About</a>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href='/careers' legacyBehavior>
        <a className={styles.menuItem}>Careers</a>
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/executive-team' legacyBehavior>
        <a className={styles.menuItem}>Executive Team</a>
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href='/advertise-with-us' legacyBehavior>
        <a className={styles.menuItem}>Advertise with Us</a>
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link href='/faqs' legacyBehavior>
        <a className={styles.menuItem}>FAQs</a>
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link href='/contact-us' legacyBehavior>
        <a className={styles.menuItem}>Contact Us</a>
      </Link>
    ),
  },
];

const AppMenu = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className={styles.mobileMenu}>
        <Dropdown menu={{ items: industriesMenu }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
            Industries <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown menu={{ items: flightTrackingMenu }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
            Flight Tracking <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown menu={{ items: aboutUsMenu }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
            About Us <DownOutlined />
          </a>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className={styles.menu}>
      <Dropdown menu={{ items: industriesMenu }} trigger={['hover']}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          Industries <DownOutlined className={styles.arrowIcon} />
        </a>
      </Dropdown>
      <Dropdown menu={{ items: flightTrackingMenu }} trigger={['hover']}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          Flight Tracking <DownOutlined className={styles.arrowIcon} />
        </a>
      </Dropdown>
      <Dropdown menu={{ items: aboutUsMenu }} trigger={['hover']}>
        <a onClick={(e) => e.preventDefault()} className={styles.menuItem}>
          About Us <DownOutlined className={styles.arrowIcon} />
        </a>
      </Dropdown>
    </div>
  );
};

const Header = ({ onLogoClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <Link href='/' legacyBehavior>
        <a onClick={onLogoClick} className={styles.logoContainer} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <img src='/icon.png' alt='Logo' className={styles.logo} />
          <span className={styles.logoText}>SkyMap</span>
        </a>
      </Link>
      <Search
        placeholder='Search...'
        enterButton={<SearchOutlined />}
        style={{ maxWidth: 400, marginRight: 20 }}
        className={styles.searchBar}
      />
      <AppMenu isMobile={isMobile} />
    </div>
  );
};

export default Header;
