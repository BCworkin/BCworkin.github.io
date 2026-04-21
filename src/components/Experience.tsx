import { experiences } from "@/data";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <p className="section-eyebrow">Background</p>
        <h2 className={styles.heading}>
          Where <em>I&apos;ve Been</em>
        </h2>
      </div>

      <hr className="rule" />

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.role} className={`${styles.item} fade-up`}>
            <div className={styles.left}>
              <span className={styles.date}>{exp.date}</span>
              <span className={styles.type}>{exp.type}</span>
            </div>

            <div className={styles.right}>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>{exp.company}</p>
              <ul className={styles.bullets}>
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {exp.stack && (
                <div className={styles.stack}>
                  {exp.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
