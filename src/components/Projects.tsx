"use client";

import { useState } from "react";
import { projects, type ProjectFilter } from "@/data";
import styles from "./Projects.module.css";

const filters: { label: string; value: ProjectFilter | "all" }[] = [
  { label: "All",              value: "all"      },
  { label: "Data Engineering", value: "data"     },
  { label: "Full Stack",       value: "fullstack" },
  { label: ".NET",             value: "dotnet"   },
];

const statusStyle: Record<string, string> = {
  ongoing:  styles.statusOngoing,
  complete: styles.statusComplete,
  academic: styles.statusAcademic,
};

export default function Projects() {
  const [active, setActive] = useState<ProjectFilter | "all">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.filter === active);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <p className="section-eyebrow">Work</p>
        <h2 className={styles.heading}>
          Projects <em>I&apos;ve Built</em>
        </h2>
      </div>

      <hr className="rule" />

      {/* Filter bar */}
      <div className={styles.filterBar}>
        {filters.map((f) => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${active === f.value ? styles.filterActive : ""}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((p) => (
          <article key={p.num} className={styles.card}>
            {/* Card header */}
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>{p.num}</span>
              <span className={`${styles.status} ${statusStyle[p.status]}`}>
                {p.statusLabel}
              </span>
            </div>

            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>

            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {p.links.length > 0 && (
              <div className={styles.links}>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
