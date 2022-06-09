import styles from "../styles/Home.module.css";

const age80inWeeks = 4171;

export default function Graph({ ageExpected }) {
  const ageInWeeks = ageExpected * 52;
  const weeksLived = localStorage.getItem("weeksLived");
  const remainingWeeks = ageInWeeks - weeksLived;

  return (
    <div>
        {/* <div className={styles.graphLabelLeft}>
            <p>1</p>
            <p>5</p>
            <p>10</p>
            <p>15</p>
            <p>20</p>
            <p>25</p>
            <p>30</p>
            <p>35</p>
            <p>40</p>
            <p>45</p>
            <p>50</p>
            <p>55</p>
            <p>60</p>
            <p>65</p>
            <p>70</p>
            <p>75</p>
            <p>80</p>
        </div> */}
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
    </div>
  );
}
