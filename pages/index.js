import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HeaderComponent from './header';
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

      <h1 className={styles.title}>
        No Optimization
        <br />
        Without Analytics
      </h1>

      <p className={styles.description}>
        Reactrix is an analytical prototyping tool for React
      </p>

      <a
        href='https://github.com/oslabs-beta/Reactrix'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.start}
      >
        <h2>Start Prototyping &#8599;</h2>
      </a>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Features &#8600;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Components &#8600;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Hierarchy Tree &#8600;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Snapshots &#8600;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
