import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

interface CardPopularProps {
  name: string;
  image: string;
  description: string;
}

export default function CardPopular(props: CardPopularProps) {
  return (
    <div className={styles.popularCard}>
      <Image
        className={styles.imgPopularGroup}
        src={props.image}
        layout='fixed'
        width={170}
        height={170}
        alt={props.name}
      />
      {/* <img className={styles.imgPopularGroup} src={props.image} width='170' /> */}
      <h3 className='text-xl mb-25'>{props.name}</h3>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <i className='fa fa-user' aria-hidden='true'></i>
          <p>-</p>
        </div>
        <div className={styles.info}>
          <i className='fa fa-list-ul' aria-hidden='true'></i>
          <p>-</p>
        </div>
        <div className={styles.info}>
          <i className='fa fa-commenting-o' aria-hidden='true'></i>
          <p>-</p>
        </div>
      </div>
      <p className='text-sm fw-medium'>{props.description}</p>
    </div>
  );
}
