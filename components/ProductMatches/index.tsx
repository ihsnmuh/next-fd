import CardMatches from 'components/General/CardMatches';
import React from 'react';
import styles from './index.module.css';

export default function ProductMatches() {
  const MatchesProduct = [
    {
      name: 'VAL BY VALERIE THOMAS',
      rating: 4.9,
      description: 'Pure Pressed Blush',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
    },
    {
      name: 'VAL BY VALERIE THOMAS',
      rating: 4.9,
      description: 'Phito Pigment Liquid Serum Fondation',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
    },
    {
      name: 'VAL BY VALERIE THOMAS',
      rating: 4.9,
      description: 'Pure Pressed Blush',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.matchesContainer}>
        <div className={styles.matchesDescription}>
          <h3 className='text-xl mb-20'>Looking for products that are just simply perfect for you?</h3>
          <p className='text-md mb-20'>
            Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve
            your concerns too?
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.btnMatches}>See My Matches</button>
          </div>
        </div>
        <div className={styles.matchesProductCards}>
          {MatchesProduct.map((data, idx) => (
            <CardMatches
              key={idx}
              name={data.name}
              image={data.image}
              description={data.description}
              rating={data.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
