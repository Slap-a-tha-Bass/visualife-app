import styles from "../styles/Home.module.css";

const age80inWeeks = 4171;

export default function Graph({ ageExpected }) {
  const ageInWeeks = ageExpected * 52;
  const weeksLived = localStorage.getItem("weeksLived");
  const remainingWeeks = ageInWeeks - weeksLived;

  return (
    <div>
      <div className={styles.graphLabelLeft}>
        {Array(ageExpected)
          .fill(null)
          .map((label, index) => {
            return (
              <div key={index}>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>

      <div className={styles.container}>
        {Array(52)
          .fill(null)
          .map((week, index) => {
            return (
              <div key={index} className={styles.graphLabelTop}>
                <p className={styles.paragraph}>{index + 1}</p>
              </div>
            );
          })}
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
    </div>
  );
}
