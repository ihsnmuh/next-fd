import AdsInternal from 'components/Ads/Internal';
import TopAds from 'components/Ads/Top';
import EditorChoice from 'components/EditorChoice';
import LatestArticle from 'components/LatestArticle';
import LatesReview from 'components/LatestReview';
import ProductMatches from 'components/ProductMatches';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Female Daily - Info, Article, Video, dan Review Seputar Kecantikan</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <TopAds />
      <EditorChoice />
      <ProductMatches />
      <AdsInternal />
      <LatestArticle />
      <LatesReview />
    </>
  );
};

export default Home;
