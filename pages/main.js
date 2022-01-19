import Image from 'next/image';
import logo from '../public/logo.png';
import cli from '../public/cli.png';

import styles from '../styles/Home.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1>Features</h1>
        <div className={styles.card}>
          <Image alt='CLI' src={cli} placeholder='blur' />
          <h3>Component Tree</h3>
          <Image
            alt='Reactrix logo'
            src={logo}
            placeholder='blur'
            width={800}
            height={800}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            {<br />}
            {<br />}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            {<br />}
            {<br />}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Reusable Components</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Hierarchy Tree</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Snapshots</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Performance Metrics</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </main>
  );
}
