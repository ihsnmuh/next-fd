import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.menusFooter}>
        <ul>
          <li>
            <Link href='#'>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Feedback</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='#'>
              <a>{'Terms & Conditions'}</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Help</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='#'>
              <a>Award</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Newsletter</a>
            </Link>
          </li>
        </ul>
        <div className={styles.appDownload}>
          <p className='mb-16 fw-semibold'>Download our mobile app</p>
          <div className={styles.store}>
            <img src='./images/googleplay-badge.png' height='40' alt='google play' />
            <img src='./images/appstore-badge.png' height='40' alt='appstore' />
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div>
          <img src='./images/FD-Logo-Pink.png' width='114px' alt='logo FD' />
          <p className='text-xs color-palette-4'>
            Copyright © 2015 - 2022 Female Daily Network ∙ All the rights reserved
          </p>
        </div>
        <div className={styles.sosmedIcon}>
          <Link href='https://web.facebook.com/FemaleDailyNetwork/'>
            <a target='_blank'>
              <img src='./icons/Facebook.svg' width='32' alt='facebook' />
            </a>
          </Link>
          <Link href='https://twitter.com/femaledaily'>
            <a target='_blank'>
              <img src='./icons/Twitter.svg' width='32' alt='twitter' />
            </a>
          </Link>
          <Link href='https://www.instagram.com/femaledailynetwork/'>
            <a target='_blank'>
              <img src='./icons/Instagram.svg' width='32' alt='instagram' />
            </a>
          </Link>
          <Link href='https://www.youtube.com/user/FemaleDailyNetwork'>
            <a target='_blank'>
              <img src='./icons/YouTube.svg' width='32' alt='youtube' />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
