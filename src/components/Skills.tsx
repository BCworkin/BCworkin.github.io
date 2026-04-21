"use client";

import { useState } from "react";
import { skills, type SkillGroup } from "@/data";
import styles from "./Skills.module.css";

const tabs: { label: string; value: SkillGroup | "all" }[] = [
  { label: "All",             value: "all"     },
  { label: "Backend",         value: "backend"  },
  { label: "Frontend",        value: "frontend" },
  { label: "Data & Analytics",value: "data"    },
  { label: "DevOps & Tools",  value: "devops"  },
  { label: "Databases",       value: "db"      },
];

export default function Skills() {
  const [active, setActive] = useState<SkillGroup | "all">("all");

  const filtered = active === "all" ? skills : skills.filter((s) => s.group === active);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <p className="section-eyebrow">Capabilities</p>
        <h2 className={styles.heading}>
          Skills &amp; <em>Stack</em>
        </h2>
        <p className={styles.sub}>
          A polyglot engineer comfortable across the full stack — from database schema to deployment pipeline.
        </p>
      </div>

      <hr className="rule" />

      {/* Tab bar */}
      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button
            key={t.value}
            className={`${styles.tab} ${active === t.value ? styles.tabActive : ""}`}
            onClick={() => setActive(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((skill) => (
          <div key={skill.name} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.level}>{skill.level}</span>
            </div>
            <div className={styles.name}>{skill.name}</div>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{ width: `${skill.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
