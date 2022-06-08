import styles from "../styles/Home.module.css";

const age80inWeeks = 4171;

export default function Graph() {
  const weeksLived = localStorage.getItem("weeksLived");
  const remainingWeeks = age80inWeeks - weeksLived;

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
      {remainingWeeks &&
        Array(Number(remainingWeeks))
          .fill(null)
          .map((block, index) => {
            return (
              <div key={index} className={styles.blockRemaining}>
                <p className={styles.paragraph}></p>
              </div>
            );
          })}
    </div>
  );
}
