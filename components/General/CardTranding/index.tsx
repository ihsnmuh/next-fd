import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

interface CardTradingProps {
  name: string;
  rating: number;
  description: string;
  sub?: string;
  image: string;
}

export default function CardTrading(props: CardTradingProps) {
  return (
    <div className={styles.editorCard}>
      <div className={styles.editorContentCard}>
        <Image
          className={styles.imgContent}
          src={props.image}
          layout='responsive'
          width={196}
          height={182}
          alt={props.name}
        />
        {/* <img src={props.image} /> */}
        <div className={styles.starsContainer}>
          <p className='text-sm fw-semibold'>{props.rating}</p>
          <div className={styles.stars}>
            <Rating sx={{ color: '#DC294F' }} name='half-rating-read' value={4.0} precision={0.5} readOnly />
          </div>
          <p className='text-xs fw-medium'>(7)</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p className='text-lg fw-semibold'>{props.name}</p>
          <p className='text-md'>{props.description}</p>
          <p className='text-xs color-palette-4'>{props.sub}</p>
        </div>
      </div>
    </div>
  );
}
