import BottomAds from 'components/Ads/Bottom';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import styles from './index.module.css';

export const MainLayout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <Footer />
      <BottomAds />
    </>
  );
};
