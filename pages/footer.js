import Image from 'next/image';

import styles from '../styles/Home.module.css';

function FooterComponent() {
  const contributors = {
    'Kevin Chung': [
      'https://github.com/kevhjc/',
      'https://www.linkedin.com/in/kevc/',
    ],
    'Jay Heo': [
      'https://github.com/heojay0309',
      'https://www.linkedin.com/in/heo/',
    ],
    'Tychicus Lee': [
      'https://github.com/tychicuslee',
      'https://www.linkedin.com/in/tychicus-lee/',
    ],
    'Jonathan Tam': [
      'https://github.com/jktam336',
      'https://www.linkedin.com/in/jktam/',
    ],
  };

  return (
    <footer className={styles.footer}>
      <div>
        <h4>Reactrix</h4>
        <div>
          <span className={styles.caption}>{'2022'}</span>
        </div>
      </div>
      <div>
        <h4>Contributors</h4>
        {Object.entries(contributors).map(([name, links], index) => {
          return (
            <div key={index}>
              <a href={links[0]}>
                <Image
                  src='/github_light.svg'
                  alt='GitHub Logo'
                  width={14}
                  height={14}
                />
              </a>
              <a href={links[1]}>
                <Image
                  src='/linkedin_light.svg'
                  alt='LinkedIn Logo'
                  width={14}
                  height={14}
                />
              </a>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default FooterComponent;
