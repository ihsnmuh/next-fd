import CardArticle from 'components/General/CardArticle';
import React from 'react';
import styles from './index.module.css';

export default function LatestArticle() {
  const latestArticles = [
    {
      title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author: 'celle',
      image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
      published_at: '4 hours ago',
    },
    {
      title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author: 'celle',
      image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
      published_at: '4 hours ago',
    },
    {
      title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author: 'celle',
      image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
      published_at: '4 hours ago',
    },
    {
      title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author: 'celle',
      image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
      published_at: '4 hours ago',
    },
    {
      title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author: 'celle',
      image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
      published_at: '4 hours ago',
    },
    {
      title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author: 'celle',
      image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
      published_at: '4 hours ago',
    },
  ];

  return (
    <section className='containerFluid'>
      <div className={styles.titleContainer}>
        <h3>Latest Articles</h3>
        <div className={styles.lastestDescription}>
          <p className='text-sm'>So you can make better purchase decision</p>
          <a href='#' className={styles.seemoreArt}>
            {'See more >'}
          </a>
        </div>
      </div>
      <div className={styles.articlesContainer}>
        {latestArticles.map((data, idx) => (
          <CardArticle
            key={idx}
            title={data.title}
            author={data.author}
            image={data.image}
            published_at={data.published_at}
          />
        ))}
      </div>
    </section>
  );
}
