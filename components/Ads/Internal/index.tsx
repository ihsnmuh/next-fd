import React from 'react';
import styles from './index.module.css';

export default function AdsInternal() {
  return (
    <div className='containerFluid'>
      <section className={styles.adsContainer}>
        <div className={styles.adsBilboard}>
          <div className={styles.adsText}>
            <h2>
              Horizontal 970x250 <br />
              (internal Campaign Only)
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
