import styles from "../styles/Home.module.css";

const age80inWeeks = 4171;

export default function Graph({ ageExpected }) {
  const ageInWeeks = ageExpected * 52;
  const weeksLived = localStorage.getItem("weeksLived");
  const remainingWeeks = ageInWeeks - weeksLived;

  return (
    <div>
        {/* <div className={styles.graphLabelLeft}>
            <p style={{ fontSize: "8px"}}>1</p>
            <p style={{ fontSize: "8px"}}>5</p>
            <p style={{ fontSize: "8px"}}>10</p>
            <p style={{ fontSize: "8px"}}>15</p>
            <p style={{ fontSize: "8px"}}>20</p>
            <p style={{ fontSize: "8px"}}>25</p>
            <p style={{ fontSize: "8px"}}>30</p>
            <p style={{ fontSize: "8px"}}>35</p>
            <p style={{ fontSize: "8px"}}>40</p>
            <p style={{ fontSize: "8px"}}>45</p>
            <p style={{ fontSize: "8px"}}>50</p>
            <p style={{ fontSize: "8px"}}>55</p>
            <p style={{ fontSize: "8px"}}>60</p>
            <p style={{ fontSize: "8px"}}>65</p>
            <p style={{ fontSize: "8px"}}>70</p>
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
