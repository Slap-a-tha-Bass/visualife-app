import styles from "../styles/Home.module.css";

const age80inWeeks = 4171;

export default function Graph() {
  const weeksLived = localStorage.getItem("weeksLived");
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
        Array(Math.floor(Number(remainingWeeksFirstHalf)))
          .fill(null)
          .map((block, index) => {
            return (
              <div key={index} className={styles.blockRemainingFirstHalf}>
                <p className={styles.paragraph}></p>
              </div>
            );
          })}
      {remainingWeeksSecondHalf &&
        Array(Math.floor(Number(remainingWeeksSecondHalf)))
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
