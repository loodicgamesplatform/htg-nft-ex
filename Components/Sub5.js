import React from 'react'
import styles from "../styles/Home.module.css";
const Sub5 = ({ setGamesComp, selection = "", item1, item2, item3,item4,item5 }) => {
  return (
    <div className={styles.submain}>
    <div
      className={styles.sub5}
      style={{
        backgroundColor: selection === `${item1}` ? "#FECE0033" : "",
        borderBottom: selection === `${item1}` ? "10px solid #FECE00" : "",
      }}
      onClick={() => setGamesComp(`${item1}`)}
    >
      {item1}
    </div>
    <div
      className={styles.sub5}
      style={{
        backgroundColor: selection === `${item2}` ? "#FECE0033" : "",
        borderBottom: selection === `${item2}` ? "10px solid #FECE00" : "",
      }}
      onClick={() => setGamesComp(`${item2}`)}
    >
      {item2}
    </div>
    <div
      className={styles.sub5}
      style={{
        backgroundColor: selection === `${item3}` ? "#FECE0033" : "",
        borderBottom: selection === `${item3}` ? "10px solid #FECE00" : "",
      }}
      onClick={() => setGamesComp(`${item3}`)}
    >
      {item3}
    </div>
    <div
      className={styles.sub5}
      style={{
        backgroundColor: selection === `${item4}` ? "#FECE0033" : "",
        borderBottom: selection === `${item4}` ? "10px solid #FECE00" : "",
      }}
      onClick={() => setGamesComp(`${item4}`)}
    >
      {item4}
    </div>
    <div
      className={styles.sub5}
      style={{
        backgroundColor: selection === `${item5}` ? "#FECE0033" : "",
        borderBottom: selection === `${item5}` ? "10px solid #FECE00" : "",
      }}
      onClick={() => setGamesComp(`${item5}`)}
    >
      {item5}
    </div>
  </div>
  )
}

export default Sub5