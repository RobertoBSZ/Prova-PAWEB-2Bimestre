import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.welcomeContainer}>
      <h1>Bem-vindo</h1>
      <p>Para continuar, entre na sua conta</p>
      <div className={styles.button}>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
