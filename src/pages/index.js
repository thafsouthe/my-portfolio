import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello, I am HASSANI Thafsouthe</h1>
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={150}
        height={150}
        className={styles.profileImage}
      />
      <p>Welcome to my portfolio website. I am a web developer specializing in React and Next.js.</p>
    </div>
  );
}
