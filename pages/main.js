import styles from '../styles/Home.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1 className={styles.subtitle}>Features</h1>
        <div className={styles.card}>
          <h3>Features &#8600;</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Components &#8600;</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Hierarchy Tree &#8600;</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Snapshots &#8600;</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </main>
  );
}
