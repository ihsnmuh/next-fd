import React from 'react';
import styles from './index.module.css';

export default function TopAds() {
  return (
    <section className={styles.adsContainer}>
      <div className={styles.adsTopFrame}>
        <div className={styles.adsText}>
          <h2>Top Frame 970x50</h2>
        </div>
      </div>
      <div className={styles.adsBilboard}>
        <div className={styles.adsText}>
          <h2>Billboard 970x250</h2>
        </div>
      </div>
    </section>
  );
}
