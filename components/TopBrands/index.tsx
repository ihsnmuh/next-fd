import React from 'react';
import styles from './index.module.css';

export default function TopBrands() {
  return (
    <section className='containerFluid'>
      <div className={styles.titleContainer}>
        <h3>Top Brands</h3>
        <div className={styles.lastestDescription}>
          <p className='text-sm'>We all know and love</p>
          <a href='#' className={styles.seemoreArt}>
            {'See more >'}
          </a>
        </div>
      </div>
      <div className={styles.brandsContainer}>
        <div className={styles.brand}>
          <img src='./images/Nivea-Logo.png' width='120' />
        </div>
        <div className={styles.brand}>
          <img src='./images/ordinary-logo.png' width='120' />
        </div>
        <div className={styles.brand}>
          <img src='./images/bodyshop-logo.png' width='120' />
        </div>
        <div className={styles.brand}>
          <img src='./images/SKII-logo.png' width='120' />
        </div>
        <div className={styles.brand}>
          <img src='./images/maybelin-logo.png' width='120' />
        </div>
        <div className={styles.brand}>
          <img src='./images/innisfree-logo.png' width='120' />
        </div>
      </div>
    </section>
  );
}
