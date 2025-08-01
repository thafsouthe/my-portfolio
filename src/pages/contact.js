import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact Me</h1>
      <p>If you&lsquo;d like to get in touch, feel free to send me a message!</p>
      <ul className={styles.contactList}>
        <li>Email: your.email@example.com</li>
        <li>
          GitHub: <a href="https://github.com/thafsouthe" target="_blank">github.com/yourusername</a>
        </li>
        <li>
          LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
        </li>
      </ul>
    </div>
  );
}
