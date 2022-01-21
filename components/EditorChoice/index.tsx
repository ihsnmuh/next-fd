import CardEditor from 'components/General/CardEditor';
import React from 'react';
import styles from './index.module.css';

export default function EditorChoice() {
  const editorChoiceData = [
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.5,
        description: 'Rouge Velvet Matte Lip Cream',
        image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      },
    },
  ];

  return (
    <div className='containerFluid'>
      <section className={styles.container}>
        <div className={styles.titleContainer}>
          <h3>Editor's Choice</h3>
          <p className='text-sm'>Curated with love</p>
        </div>
        <div className={styles.editorCards}>
          {editorChoiceData?.map((data, idx) => (
            <CardEditor key={idx} editor={data.editor} role={data.role} product={data.product} />
          ))}
        </div>
      </section>
    </div>
  );
}
