import React from 'react'
import styles from "../styles/Home.module.css";
const VotesBox = ({title, desc,status}) => {
  return (
    <div className={styles.votesdiv}>
    <div className={styles.statssmallbox}></div>
    <div className={styles.statsbigbox}>
      <div className={styles.statstitle}>{title}</div>
      <div className={styles.statsdescription}>{desc}</div>
      <div className={styles.statsstatus}>{status}</div>
    </div>
</div>
  )
}

export default VotesBox