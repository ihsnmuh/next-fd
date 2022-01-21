import CardPopular from 'components/General/CardPopular';
import React from 'react';
import styles from './index.module.css';

export default function PopularGroup() {
  const popularGroup = [
    {
      name: 'Embrace The curl',
      image: './images/image-profile.jpg',
      description: 'May our curls pop and never stop!',
    },
    {
      name: 'Embrace The curl',
      image: './images/image-profile.jpg',
      description: 'May our curls pop and never stop!',
    },
    {
      name: 'Embrace The curl',
      image: './images/image-profile.jpg',
      description: 'May our curls pop and never stop!',
    },
    {
      name: 'Embrace The curl',
      image: './images/image-profile.jpg',
      description: 'May our curls pop and never stop!',
    },
  ];

  return (
    <section className='containerFluid'>
      <div className={styles.titleContainer}>
        <h3>Popular Groups</h3>
        <div className={styles.lastestDescription}>
          <p className='text-sm'>We the beauty TALK are</p>
          <a href='#' className={styles.seemoreArt}>
            {'See more >'}
          </a>
        </div>
      </div>
      <div className={styles.popularsContainer}>
        {popularGroup.map((data, idx) => (
          <CardPopular key={idx} name={data.name} image={data.image} description={data.description} />
        ))}
      </div>
    </section>
  );
}
