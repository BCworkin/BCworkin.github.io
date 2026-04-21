"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

const links = ["Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* Masthead logo */}
      <Link href="#hero" className={styles.logo}>
        <span className={styles.logoMain}>BC.</span>
      </Link>

      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <Link href={`#${l.toLowerCase()}`}>{l}</Link>
          </li>
        ))}
      </ul>

      <a href="mailto:bryanchiamjf01@gmail.com" className={styles.cta}>
        Hire Me
      </a>
    </nav>
  );
}
