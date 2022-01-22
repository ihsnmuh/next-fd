import React from 'react';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.menusFooter}>
        <ul>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Feedback</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Terms & Conditions</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Help</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Award</a>
          </li>
          <li>
            <a href='#'>Newsletter</a>
          </li>
        </ul>
        <div className={styles.appDownload}>
          <p className='mb-16 fw-semibold'>Download our mobile app</p>
          <div className={styles.store}>
            <img src='./images/googleplay-badge.png' height='40' />
            <img src='./images/appstore-badge.png' height='40' />
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div>
          <img src='./images/FD-Logo-Pink.png' width='114px' />
          <p className='text-xs color-palette-4'>
            Copyright © 2015 - 2022 Female Daily Network ∙ All the rights reserved
          </p>
        </div>
        <div className={styles.sosmedIcon}>
          <a target='_blank' href='https://web.facebook.com/FemaleDailyNetwork/'>
            <img src='./icons/Facebook.svg' width='32' />
          </a>
          <a target='_blank' href='https://twitter.com/femaledaily'>
            <img src='./icons/Twitter.svg' width='32' />
          </a>
          <a target='_blank' href='https://www.instagram.com/femaledailynetwork/'>
            <img src='./icons/Instagram.svg' width='32' />
          </a>
          <a target='_blank' href='https://www.youtube.com/user/FemaleDailyNetwork'>
            <img src='./icons/YouTube.svg' width='32' />
          </a>
        </div>
      </div>
    </footer>
  );
}
