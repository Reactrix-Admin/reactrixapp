import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HeaderComponent from './header';

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

      <HeaderComponent></HeaderComponent>

      <h1 className={styles.title}>
        No Optimization
        <br />
        Without Analytics
      </h1>

      <p className={styles.description}>
        Reactrix is an analytical prototyping tool for React
      </p>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a
            href='https://github.com/oslabs-beta/Reactrix'
            className={styles.card}
          >
            <h2>Features &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>

          <a
            href='https://github.com/oslabs-beta/Reactrix'
            className={styles.card}
          >
            <h2>Components &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>

          <a
            href='https://github.com/oslabs-beta/Reactrix'
            className={styles.card}
          >
            <h2>Hierarchy Tree &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>

          <a
            href='https://github.com/oslabs-beta/Reactrix'
            className={styles.card}
          >
            <h2>Snapshots &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/oslabs-beta/Reactrix'
          target='_blank'
          rel='noopener noreferrer'
        >
          Start Prototyping <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
}
