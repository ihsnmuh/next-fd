import TopAds from 'components/Ads/Top';
import EditorChoice from 'components/EditorChoice';
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
    </>
  );
};

export default Home;
