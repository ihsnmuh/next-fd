import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

interface products {
  name: string;
  rating: number;
  description: string;
  image: string;
}

interface CardEditorProps {
  editor: string;
  role: string;
  product: products;
}

export default function CardEditor(props: CardEditorProps) {
  return (
    <>
      <div className={styles.editorCard}>
        <div className={styles.editorUserCard}>
          <Image
            className={styles.imgProfile}
            src={'/images/image-profile.jpg'}
            layout='fixed'
            width={60}
            height={60}
            alt={props.editor}
          />
          {/* <img src='./images/image-profile.jpg' width='60px'  alt={props.editor} /> */}
          <div>
            <p className='text-md fw-semibold'>{props.editor}</p>
            <p className='text-xs'>{props.role}</p>
          </div>
        </div>
        <div className={styles.editorContentCard}>
          <Image
            className={styles.imgProduct}
            src={props.product.image}
            layout='responsive'
            width={196}
            height={182}
            alt={props.product.name}
          />
          {/* <img src={props.product.image} /> */}
          <div className={styles.starsContainer}>
            <p className='text-md fw-semibold'>{props.product.rating}</p>
            <div className={styles.star}>
              <Rating
                sx={{ color: '#DC294F' }}
                name='half-rating-read'
                value={props.product.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <p className='text-sm fw-medium'>(7)</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p className='text-lg fw-semibold'>{props.product.name}</p>
            <p className='text-md'>{props.product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
