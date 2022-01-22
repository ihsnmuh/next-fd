import AdsInternal from 'components/Ads/Internal';
import TopAds from 'components/Ads/Top';
import EditorChoice from 'components/EditorChoice';
import LatestArticle from 'components/LatestArticle';
import LatesReview from 'components/LatestReview';
import LatestVideo from 'components/LatesVideo';
import PopularGroup from 'components/PopularGroup';
import ProductMatches from 'components/ProductMatches';
import TextInfo from 'components/TextInfo';
import TopBrands from 'components/TopBrands';
import Tranding from 'components/Tranding';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllData } from 'store/actionsCreator/data';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

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
      <PopularGroup />
      <LatestVideo />
      <Tranding />
      <TopBrands />
      <TextInfo />
    </>
  );
};

export default Home;
