import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

export default function LatestVideo() {
  return (
    <section className='containerFluid'>
      <div className={styles.titleContainer}>
        <h3>Latest Videos</h3>
        <div className={styles.lastestDescription}>
          <p className='text-sm'>Watch and learn, ladies</p>
          <a href='#' className={styles.seemoreArt}>
            {'See more >'}
          </a>
        </div>
      </div>
      <div className={styles.containerVideo}>
        <div>
          {/* <Image
            className={styles.imgCover}
            src={
              'https://editorial.femaledaily.com/wp-content/uploads/2022/01/FD-Best-Skincare-2021-versi-Editorial-Female-Daily.jpg'
            }
            alt='image Video'
            width={450}
            height={240}
            layout='responsive'
          /> */}
          <img
            className={styles.imgCover}
            src='https://editorial.femaledaily.com/wp-content/uploads/2022/01/FD-Best-Skincare-2021-versi-Editorial-Female-Daily.jpg'
            alt='image Video'
          />
        </div>
        <div>
          {/* <Image
            className={styles.imgCover}
            src={'https://editorial.femaledaily.com/wp-content/uploads/2022/01/FD-Biggest-Makeup-Trends-of-2021.jpg'}
            alt='image Video'
            width={450}
            height={240}
            layout='responsive'
          /> */}
          <img
            className={styles.imgCover}
            src='https://editorial.femaledaily.com/wp-content/uploads/2022/01/FD-Biggest-Makeup-Trends-of-2021.jpg'
            alt='image Video'
          />
        </div>
        <div>
          {/* <Image
            className={styles.imgCover}
            src={
              'https://editorial.femaledaily.com/wp-content/uploads/2022/01/FD-Rekomendasi-Parfume-yang-Wanginya-Gak-Pasaran-versi-Tasha-1.jpg'
            }
            alt='image Video'
            width={450}
            height={240}
            layout='responsive'
          /> */}
          <img
            className={styles.imgCover}
            src='https://editorial.femaledaily.com/wp-content/uploads/2022/01/FD-Rekomendasi-Parfume-yang-Wanginya-Gak-Pasaran-versi-Tasha-1.jpg'
            alt='image Video'
          />
        </div>
      </div>
    </section>
  );
}
