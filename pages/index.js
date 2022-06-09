import Head from "next/head";
import { useState, useReducer } from "react";

import styles from "../styles/Home.module.css";
import { yearInWeeks } from "../utils/yearInWeeks";
import Graph from "../components/graph";
import Loader from "../components/loader";

import { reset, months, days, ages } from "../utils/helpers";

export default function Home() {
  const [yearBorn, setYearBorn] = useState(2000);
  const [monthBorn, setMonthBorn] = useState(1);
  const [dayBorn, setDayBorn] = useState(1);
  const [ageExpected, setAgeExpected] = useState(80);

  const [loading, setLoading] = useState(false);

  const [isSubmitted, toggle] = useReducer((s) => !s, false);
  const [off, toggleForm] = useReducer((s) => !s, false);
  const [button, remove] = useReducer((s) => !s, false);

  const yearExpectancy = new Date().getFullYear() - ageExpected;

  // create a function that will submit the data to local storage
  const submitData = () => {
    if (yearBorn < yearExpectancy) {
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
  const reset = () => {
    setYearBorn(2000);
    setMonthBorn(1);
    setDayBorn(1);
    setAgeExpected(80);
    setLoading(false);
    toggle(!isSubmitted);
    remove(!button);
    toggleForm(!off);
  };
  const years = Array(year - yearExpectancy)
    .fill(null)
    .map((year, index) => {
      return yearExpectancy + index + 1;
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
              <span>Red blocks</span> are weeks you have left til age{" "}
              <span>{ageExpected}</span>
            </p>
          </div>
        )}
        {!off && (
          <div>
            <div className={styles.asideLeft}>
              <p>Visualize your life in the form of weeks</p>
            </div>
            <div className={styles.form}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem 0",
                }}
              >
                <div className={styles.asideRight}>
                  <label className={styles.label}>Expected Years</label>
                  <label className={styles.label}>To Live</label>
                  <select
                    className={styles.select}
                    value={ageExpected}
                    onChange={(e) => setAgeExpected(e.target.value)}
                  >
                    {ages.map((age, index) => {
                      return (
                        <option key={index} value={age}>
                          {age}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem 0",
                }}
              >
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
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem 0",
                }}
              >
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
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem 0",
                }}
              >
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
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {!button && (
                  <button className={styles.button} onClick={submitData}>
                    Submit
                  </button>
                )}
                {button && (
                  <button
                    className={styles.buttonVisualife}
                    onClick={fetchData}
                  >
                    Visualife
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.button}>
              <Loader />
            </button>
          </div>
        )}
        {isSubmitted && <Graph ageExpected={ageExpected} />}
        {isSubmitted && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.button} onClick={reset}>
              Run it again
            </button>
          </div>
        )}
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
