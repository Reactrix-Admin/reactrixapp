import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';

function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link href='/'>{'Reactrix'}</Link>
      <div className={styles.social}>
        {/* <span className={styles.icon}>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <Image
              src='/linkedin.svg'
              alt='LinkedIn Logo'
              width={24}
              height={24}
            />
          </a>
        </span> */}
        <span className={styles.icon}>
          <a
            href='https://github.com/oslabs-beta/Reactrix'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src='/github.svg' alt='GitHub Logo' width={24} height={24} />
          </a>
        </span>
      </div>
    </header>
  );
}

export default HeaderComponent;
