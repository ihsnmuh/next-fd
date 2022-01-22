import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

interface CardMatchesProps {
  name: string;
  rating: number;
  description: string;
  image: string;
}

export default function CardMatches(props: CardMatchesProps) {
  return (
    <>
      <div className={styles.editorCard}>
        <div className={styles.editorContentCard}>
          <Image
            className={styles.imgProduct}
            src={props.image}
            layout='responsive'
            width={196}
            height={182}
            alt={props.name}
          />
          {/* <img src={props.image} /> */}
          <p className='text-sm fw-semibold color-palette-1'>Match Skin Type</p>
          <div className={styles.starsContainer}>
            <p className='text-md fw-semibold'>{props.rating}</p>
            <div className={styles.star}>
              <Rating sx={{ color: '#DC294F' }} name='half-rating-read' value={props.rating} precision={0.5} readOnly />
            </div>
            <p className='text-sm fw-medium'>(7)</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p className='text-lg fw-semibold'>{props.name}</p>
            <p className='text-md'>{props.description}</p>
            <p className='text-xs color-palette-4'>Neutral Rose</p>
          </div>
        </div>
      </div>
    </>
  );
}
