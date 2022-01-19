import Image from 'next/image';

import styles from '../../styles/Home.module.css';

export default function Headline() {
  return (
    <>
      <h1 className={styles.title}>
        No <span className={styles.gradient}>Optimization</span>
        <br />
        Without Analytics
      </h1>
      <div className={styles.logo}></div>
      <p className={styles.description}>
        <Image
          src='/splash.png'
          alt='Splash'
          width={800}
          height={509}
          layout='intrinsic'
        />
      </p>
      <a
        href='https://github.com/oslabs-beta/Reactrix'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.start}
      >
        <h3>Start Prototyping &#8599;</h3>
      </a>
    </>
  );
}
