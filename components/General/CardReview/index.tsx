import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

interface ProductProps {
  image: string;
  name: string;
  desc: string;
}

interface CardReviewProps {
  user: string;
  profile: string[];
  product: ProductProps;
  star: number;
  comment: string;
}

export default function CardReview(props: CardReviewProps) {
  return (
    <div className={styles.cardReview}>
      <div className={styles.topCardReview}>
        <Image
          src={props.product.image}
          className={styles.imgCardReview}
          width={65}
          height={60}
          alt={props.product.name}
        />
        {/* <img src={props.product.image} className={styles.imgCardReview} /> */}
        <div>
          <h4>{props.product.name}</h4>
          <p>{props.product.desc}</p>
        </div>
      </div>
      <div className={styles.bottomCardReview}>
        <div className={styles.rateReview}>
          <div className={styles.reviewStars}>
            <Rating sx={{ color: '#DC294F' }} name='half-rating-read' value={props.star} precision={1} readOnly />
          </div>
          <p className='text-xs color-palette-5'>2 hours ago</p>
        </div>
        <div className={styles.descriptionReview}>
          <p className='text-sm mb-10'>
            {props.comment.slice(0, 100)}...
            <span className='color-palette-1'> Read more</span>
          </p>
        </div>
      </div>
      <div className={styles.userReview}>
        <Image className='user-img' src={'/images/image-profile.jpg'} width={50} height={50} alt={props.profile[0]} />
        {/* <img className='user-img' src='./images/image-profile.jpg' width='50' alt={props.profile[0]} /> */}
        <p className='text-sm fw-semibold'>{props.profile[0]}</p>
        <p className='text-xs color-palette-4'>
          {props.profile[1]}, {props.profile[2]}, {props.profile[3]}
        </p>
      </div>
    </div>
  );
}
