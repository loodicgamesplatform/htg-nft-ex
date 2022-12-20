import React from "react";
import styles from "../styles/Home.module.css";
const Sub = ({ setGamesComp, selection = "", item1, item2, item3 }) => {
  return (
    <div className={styles.submain}>
      <div
        className={styles.sub}
        style={{
          backgroundColor: selection === `${item1}` ? "#FECE0033" : "",
          borderBottom: selection === `${item1}` ? "10px solid #FECE00" : "",
        }}
        onClick={() => setGamesComp(`${item1}`)}
      >
        {item1}
      </div>
      <div
        className={styles.sub}
        style={{
          backgroundColor: selection === `${item2}` ? "#FECE0033" : "",
          borderBottom: selection === `${item2}` ? "10px solid #FECE00" : "",
        }}
        onClick={() => setGamesComp(`${item2}`)}
      >
        {item2}
      </div>
      <div
        className={styles.sub}
        style={{
          backgroundColor: selection === `${item3}` ? "#FECE0033" : "",
          borderBottom: selection === `${item3}` ? "10px solid #FECE00" : "",
        }}
        onClick={() => setGamesComp(`${item3}`)}
      >
        {item3}
      </div>
    </div>
  );
};

export default Sub;

//  background: rgba(254, 206, 0, 0.2);
//border-bottom: 10px solid #FECE00;
