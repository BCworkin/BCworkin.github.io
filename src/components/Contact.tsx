import styles from "./Contact.module.css";

const contactLinks = [
  {
    label: "Email",
    value: "bryanchiamjf01@gmail.com",
    href: "mailto:bryanchiamjf01@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "bryan-chiam-jf",
    href: "https://www.linkedin.com/in/bryan-chiam-jf/",
  },
  {
    label: "GitHub",
    value: "BCworkin",
    href: "https://github.com/BCworkin",
  },
  {
    label: "Phone",
    value: "0459 358 061",
    href: "tel:0459358061",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      {/* Background pull-quote */}
      <p className={styles.bgQuote} aria-hidden>
        LET&apos;S<br />WORK.
      </p>

      <div className={styles.inner}>
        <p className="section-eyebrow">Get in Touch</p>

        <h2 className={styles.heading}>
          Open for <em>Business.</em>
        </h2>

        <p className={styles.sub}>
          Looking for full-time roles across full stack, data engineering, and
          product.
        </p>

        <hr className={styles.rule} />

        <div className={styles.links}>
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className={styles.link}
            >
              <span className={styles.linkLabel}>{c.label}</span>
              <span className={styles.linkValue}>{c.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
