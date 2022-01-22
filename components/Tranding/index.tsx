import CardTrading from 'components/General/CardTranding';
import React from 'react';
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Tranding() {
  const pagination = {
    clickable: true,
  };

  const TrandingProduct = [
    {
      name: 'SKINCEUTICALS',
      rating: 4.9,
      description: 'C E Ferulic',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: '',
    },
    {
      name: 'JUICE BEAUTY',
      rating: 4.9,
      description: 'Phyto-Pigments Flawless Serum..',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: 'Rosy Beige',
    },
    {
      name: 'JUICE BEAUTY',
      rating: 4.9,
      description: 'Pure Pressed Blush',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: 'Neutral Rose',
    },
    {
      name: 'SKINCEUTICALS',
      rating: 4.9,
      description: 'C E Ferulic',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: '',
    },
    {
      name: 'VAL BY VALERIE THOMAS',
      rating: 4.9,
      description: 'Pure Pressed Blush',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: 'Neutral Rose',
    },
    {
      name: 'JUICE BEAUTY',
      rating: 4.9,
      description: 'Phyto-Pigments Flawless Serum..',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: 'Rosy Beige',
    },
    {
      name: 'SKINCEUTICALS',
      rating: 4.9,
      description: 'C E Ferulic',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: '',
    },
    {
      name: 'JUICE BEAUTY',
      rating: 4.9,
      description: 'Phyto-Pigments Flawless Serum..',
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      sub: 'Rosy Beige',
    },
  ];

  return (
    <section className='containerFluid'>
      <div className={styles.titleContainer}>
        <h3>Tranding This Week</h3>
        <div className={styles.lastestDescription}>
          <p className='text-sm'>See our weekly most reviewed products</p>
          <a href='#' className={styles.seemoreArt}>
            {'See more >'}
          </a>
        </div>
      </div>
      <div className={styles.trandingProducts}>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          slidesPerGroup={2}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={pagination}
          navigation={true}
          className='mySwiper'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {TrandingProduct.map((data, idx) => (
            <SwiperSlide key={idx}>
              <CardTrading
                key={idx}
                name={data.name}
                rating={data.rating}
                description={data.description}
                image={data.image}
                sub={data.sub}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
