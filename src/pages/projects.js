/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <p className={styles.subtitle}>Here are a few projects I've been working on lately:</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/project1.jpg" alt="Project 1" />
          <h3>Express delivery app</h3>
          <p>A web and mobile application that allows users to order and receive items, built with React and styled with Tailwind CSS.</p>
          <a href="#">View Project</a>
        </div>
        <div className={styles.card}>
          <img src="/project2.avif" alt="Project 2" />
          <h3>Inventory management platform</h3>
          <p>A system that helps businesses track, manage, and optimize their stock levels, orders, and warehouse operations in real time.</p>
          <a href="#">View Project</a>
        </div>
        <div className={styles.card}>
          <img src="/project3.webp" alt="Project 3" />
          <h3>E-commerce application</h3>
          <p> A digital platform that enables users to browse, purchase, and manage products or services online.</p>
          <a href="#">View Project</a>
        </div>
      </div>
    </div>
  );
}
