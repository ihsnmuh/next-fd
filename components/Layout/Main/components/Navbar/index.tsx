import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.navbarContainer}>
        <button className={styles.icon}>
          <i className='fa fa-bars'></i>
        </button>
        <div className={styles.logo}>
          <Image src='/images/FD-Logo-Pink.png' height={32} width={154} alt='logo' />
          {/* <img src='./images/FD-Logo-Pink.png' height={'32px'} /> */}
        </div>
        <div className={styles.inputContainer}>
          <i className='fa fa-search icon-search' style={{ padding: '0.5rem 0.6rem' }}></i>
          <input
            className={styles.inputField}
            type='search'
            placeholder='Search product, articles, topics, brands, etc'
          />
        </div>
        <div>
          <button className={styles.btn}>
            <i className='fa fa-user-circle-o' style={{ marginRight: '0.5rem' }}></i> LOGIN / SIGNUP
          </button>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menus}>
          <li>
            <a href='#' className={styles.menu}>
              SKINCARE
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              MAKE UP
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              BODY
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              HAIR
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              FRAGRANCE
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              NAILS
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              TOOLS
            </a>
          </li>
          <li>
            <a href='#' className={styles.menu}>
              BRANDS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
