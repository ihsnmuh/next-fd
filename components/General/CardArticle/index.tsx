import React from 'react';
import styles from './index.module.css';

interface CardArtcleProps {
  title: string;
  author: string;
  image: string;
  published_at: string;
}

export default function CardArticle(props: CardArtcleProps) {
  return (
    <div className={styles.cardArticle}>
      <img className={styles.imgArticle} src={props.image} />
      <h3 className='pb-10 pt-10'>{props.title}</h3>
      <p className='text-sm color-palette-5 pb-15'>
        <span className='fw-medium'>{props.author}</span> | {props.published_at}
      </p>
    </div>
  );
}
