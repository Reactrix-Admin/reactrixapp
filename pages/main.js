import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1>What is Reactrix?</h1>
        <div className={styles.card}>
          <p>
            Reactrix is an analytical prototyping tool for React developers to
            quickly create component trees and compare performance metrics based
            on snapshots.
          </p>
        </div>
        <h1>Features</h1>
        <div className={styles.card}>
          <h3>Drag & Drop 🤏</h3>
          <p>
            Visualize your component hierarchy by dragging and dropping
            components into the component tree. View and rearrange
            parent/sibling/children relationships.
          </p>
          <h3>Component Library 📕</h3>
          <p>Create reusable components and store them across sessions.</p>
          <h3>Preview/Demo 🪄</h3>
          <p>
            Render your application into a demo view with full interactions.
          </p>
          <h3>Profiling 🔎</h3>
          <p>
            Profile the intital render performance of your current component
            tree.
          </p>
          <h3>Performance Metrics 📊</h3>
          <p>
            View the performance data of your parent and children componenets
            displayed as a bar graph.
          </p>
          <h3>Snapshots 📷</h3>
          <p>
            Save and compare performance metrics of your previously saved
            snapshots.
          </p>
          <h3>OAuth 🔑</h3>
          <p>
            Create an account and authenticate yourself through GitHub OAuth.
          </p>
        </div>
        <h1 className={styles.whiteText}>Getting Started & Contributing</h1>
        <div className={styles.card}>
          <p>
            Head on over to our{' '}
            <a href='https://github.com/oslabs-beta/Reactrix'>{'GitHub'}</a> and
            clone the repo.
            <p>
              {' '}
              Reactrix is an open-source product that is always updating. If you
              are interested in contributing to the product, fork the repo and
              work on a branch to tackle a feature. Be clear on what the branch
              works towards through descriptive commits and push the code to
              your branch. Finally, create a pull request!
            </p>
          </p>
        </div>
      </div>
    </main>
  );
}
