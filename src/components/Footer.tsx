import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.logo}>BRYAN CHIAM</span>
        <span className={styles.sub}>Portfolio · Adelaide, SA</span>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Bryan Chiam. All rights reserved.
      </p>
      <div className={styles.right}>
        <a href="https://github.com/BCworkin" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/bryan-chiam-jf/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:bryanchiamjf01@gmail.com">Email</a>
      </div>
    </footer>
  );
}
