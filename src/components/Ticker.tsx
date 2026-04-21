import { tickerItems } from "@/data";
import styles from "./Ticker.module.css";

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
