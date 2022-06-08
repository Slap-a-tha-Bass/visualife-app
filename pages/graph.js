import styles from "../styles/Home.module.css";
import { useEffect } from "react";
const age80inWeeks = 4171;

export default function Graph() {
  useEffect(() => {
    const weeksLived = localStorage.getItem("weeksLived");
    return weeksLived;
  }, [weeksLived]);
  const remainingWeeksFirstHalf = (age80inWeeks - weeksLived) / 2;
  const remainingWeeksSecondHalf = remainingWeeksFirstHalf;

  return (
    <div className={styles.container}>
      {weeksLived &&
        Array(Number(weeksLived))
          .fill(null)
          .map((block, index) => {
            return (
              <div key={index} className={styles.blockLived}>
                <p className={styles.paragraph}></p>
              </div>
            );
          })}
      {remainingWeeksFirstHalf &&
        Array(Number(remainingWeeksFirstHalf) + Number(weeksLived))
          .fill(null)
          .map((block, index) => {
            return (
              <div key={index} className={styles.blockRemainingFirstHalf}>
                <p className={styles.paragraph}></p>
              </div>
            );
          })}
      {remainingWeeksSecondHalf &&
        Array(
          Number(remainingWeeksSecondHalf) +
            Number(weeksLived) +
            Number(remainingWeeksFirstHalf)
        )
          .fill(null)
          .map((block, index) => {
            return (
              <div key={index} className={styles.blockRemainingSecondHalf}>
                <p className={styles.paragraph}></p>
              </div>
            );
          })}
    </div>
  );
}
