import Head from "next/head";
import { useState, useReducer } from "react";

import styles from "../styles/Home.module.css";
import { yearInWeeks } from "../utils/yearInWeeks";
import Graph from "../components/graph";
import Loader from "../components/loader";

export default function Home() {
  const [yearBorn, setYearBorn] = useState(2000);
  const [monthBorn, setMonthBorn] = useState(1);
  const [dayBorn, setDayBorn] = useState(1);
  const [loading, setLoading] = useState(false);

  const [isSubmitted, toggle] = useReducer((s) => !s, false);
  const [off, toggleForm] = useReducer((s) => !s, false);
  const [button, remove] = useReducer((s) => !s, false);

  const year80 = new Date().getFullYear() - 80;

  // create a function that will submit the data to local storage
  const submitData = () => {
    if (yearBorn < year80) {
      alert("You must be lest than 80 years old to use this app.");
      setYearBorn(2000);
      return;
    }
    if (monthBorn > 12 || monthBorn < 1) {
      alert("Please enter a valid month.");
      setMonthBorn(1);
      return;
    }
    if (dayBorn > 31 || dayBorn < 1) {
      alert("Please enter a valid day.");
      setDayBorn(1);
      return;
    }
    setLoading(true);
    localStorage.setItem("yearBorn", yearBorn);
    localStorage.setItem("monthBorn", monthBorn);
    localStorage.setItem("dayBorn", dayBorn);
    setTimeout(() => {
      remove(!button);
      setLoading(false);
    }, 1000);
  };
  const fetchData = () => {
    setLoading(true);
    const yearBorn = localStorage.getItem("yearBorn");
    const monthBorn = localStorage.getItem("monthBorn");
    const dayBorn = localStorage.getItem("dayBorn");
    localStorage.setItem(
      "weeksLived",
      yearInWeeks({ yearBorn, monthBorn, dayBorn })
    );
    setTimeout(() => {
      toggleForm(!off);
      setLoading(false);
      toggle(!isSubmitted);
    }, 1000);
  };
  // create an array of years from the year80 to the current year
  const years = Array(year - year80)
    .fill(null)
    .map((year, index) => {
      return year80 + index + 1;
    });
  const months = Array(12)
    .fill(null)
    .map((month, index) => {
      return index + 1;
    });
  const days = Array(31)
    .fill(null)
    .map((day, index) => {
      return index + 1;
    });
  return (
    <div>
      <Head>
        <title>Visualife App</title>
        <meta
          name="description"
          content="Visualize your life in the form of weeks"
        />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!off && (
          <div className={styles.asideLeft}>
            <p>Visualize your life</p>
          </div>
        )}
        {!off && (
          <div className={styles.asideRight}>
            <p>In the form of weeks</p>
          </div>
        )}
        <h1 className={styles.title}>Welcome to Visualife</h1>
        {off && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <p className={styles.subtitle}>
              <span>Cream blocks</span> are weeks you have lived
            </p>
            <p className={styles.subtitle}>
              <span>Red blocks</span> are weeks you have yet to live
            </p>
          </div>
        )}
        {!off && (
          <div className={styles.form}>
            <div>
              <label className={styles.label}>Year Born</label>
              <select
                className={styles.select}
                value={yearBorn}
                onChange={(e) => setYearBorn(Number(e.target.value))}
              >
                <option>{year}</option>
                {years.reverse().map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label className={styles.label}>Month Born</label>
              <select
                className={styles.select}
                value={monthBorn}
                onChange={(e) => setMonthBorn(Number(e.target.value))}
              >
                {months.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label className={styles.label}>Day Born</label>
              <select
                className={styles.select}
                value={dayBorn}
                onChange={(e) => setDayBorn(Number(e.target.value))}
              >
                {days.map((day, index) => {
                  return (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  );
                })}
              </select>
            </div>
            {!button && (
              <button className={styles.button} onClick={submitData}>
                Submit
              </button>
            )}
            {button && (
              <button className={styles.buttonVisualife} onClick={fetchData}>
                Visualife
              </button>
            )}
          </div>
        )}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.button}>
              <Loader />
            </button>
          </div>
        )}
        {isSubmitted && <Graph />}
        <div className={styles.landscapeMode}>
          Turn screen for best experience
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Copyright © {year}</p>
      </footer>
    </div>
  );
}
const year = new Date().getFullYear();
