import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HeaderComponent from './header';
import Headline from './headline';
import Main from './main';
import FooterComponent from './footer';

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
