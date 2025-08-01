/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>Hello! I&m <strong>HASSANI Thafsouthe</strong>, a passionate web developer with a love for clean design and efficient code.</p>
          <p>Right now, I&m focused on mastering React and Next.js, building modern, responsive, and performant web applications.</p>
          <p>My goal is to create digital experiences that are user-friendly and visually appealing.</p>
        </div>
        <div className={styles.details}>
          <h3>Skills</h3>
          <ul>
            <li>💻 HTML, CSS, JavaScript</li>
            <li>⚛️ React, Next.js</li>
            <li>🎨 Tailwind CSS, CSS Modules</li>
            <li>🛠 Git & GitHub</li>
          </ul>

          <h3>Interests</h3>
          <ul>
            <li>🎮 Game development</li>
            <li>📚 Learning new tech</li>
            <li>🎵 Music and audio production</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
