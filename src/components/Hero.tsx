import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Top dateline bar */}
      <div className={styles.dateline}>
        <span>Adelaide, South Australia</span>
        <span>Est. 2022</span>
      </div>

      <hr className="rule-gold" />

      {/* Masthead */}
      <div className={styles.masthead}>
        <div className={styles.mastheadLeft}>
        </div>
        <h1 className={styles.title}>
          BRYAN<br />
          <em>CHIAM</em>
        </h1>
        <div className={styles.mastheadRight}>
          <span className={styles.mastheadLabel}>Available Now</span>
          <span className={styles.mastheadAvail}>● Open to Roles</span>
        </div>
      </div>

      <hr className="rule-gold" />

      {/* Hero body — magazine cover layout */}
      <div className={styles.body}>
        {/* Left column — cover story */}
        <div className={styles.coverStory}>
          <p className={styles.coverKicker}></p>
          <h2 className={styles.coverHeadline}>
            Full Stack Engineer that Delivers
          </h2>
          <p className={styles.coverDeck}>
            From .NET WebAPIs to Databricks medallion pipelines, I've 
            built and delivered systems across different tech stacks which span
            full stack and data engineering.
          </p>
          <div className={styles.coverCtas}>
            <a href="#projects" className={styles.btnPrimary}>
              Read the Work →
            </a>
            <a
              href="https://github.com/BCworkin"
              target="_blank"
              rel="noreferrer"
              className={styles.btnGhost}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Centre divider */}
        <div className={styles.dividerV} />

        {/* Right column — stat briefs */}
        <div className={styles.briefs}>
          <p className={styles.briefsHeader}>Also Inside</p>
          {[
            { num: "3+",  label: "Years of Industry Experience" },
            { num: "4",   label: "Projects Shipped to Production" },
            { num: "10+", label: "Technologies in Active Use" },
          ].map(({ num, label }) => (
            <div key={num} className={styles.brief}>
              <span className={styles.briefNum}>{num}</span>
              <span className={styles.briefLabel}>{label}</span>
            </div>
          ))}

          <div className={styles.briefSocials}>
            <a href="https://www.linkedin.com/in/bryan-chiam-jf/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:bryanchiamjf01@gmail.com">Email ↗</a>
          </div>
        </div>
      </div>

      <hr className="rule" />
    </section>
  );
}
