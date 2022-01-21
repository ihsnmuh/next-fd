import CardReview from 'components/General/CardReview';
import React from 'react';
import styles from './index.module.css';

export default function LatesReview() {
  const latestReview = [
    {
      user: 'atikaxr',
      profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
      product: {
        image: 'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
        name: 'Tony Moly',
        desc: 'Delight Tony Tint',
      },
      star: 3,
      comment:
        'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
    },
    {
      user: 'atikaxr',
      profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
      product: {
        image: 'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
        name: 'Tony Moly',
        desc: 'Delight Tony Tint',
      },
      star: 3,
      comment:
        'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
    },
    // {
    //   user: 'atikaxr',
    //   profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
    //   product: {
    //     image: 'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    //     name: 'Tony Moly',
    //     desc: 'Delight Tony Tint',
    //   },
    //   star: 3,
    //   comment:
    //     'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
    // },
  ];

  return (
    <section className={styles.containerFluid}>
      <div className={styles.contentLastest}>
        <div className={styles.titleContainer}>
          <h3>Latest Review</h3>
          <div className={styles.lastestDescription}>
            <p className='text-sm'>So you can make better purchase decision</p>
            <a href='#' className={styles.seemoreArt}>
              {'See more >'}
            </a>
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.cards}>
            {latestReview.map((data, idx) => (
              <CardReview
                key={idx}
                user={data.user}
                profile={data.profile}
                product={data.product}
                star={data.star}
                comment={data.comment}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.adsReviewLastest}>
        <div className={styles.adsMr}>
          <div className={styles.adsText}>
            <h2>
              MR 2 <br />
              300 x 250
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
