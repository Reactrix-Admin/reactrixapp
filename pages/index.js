import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HeaderComponent from './components/header';
import Headline from './components/headline';
import Main from './main';
import FooterComponent from './components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reactrix</title>
        <meta
          name='description'
          content='Analytical Prototyping Tool for React'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderComponent />
      <Headline />
      <Main />
      <FooterComponent />
    </div>
  );
}
