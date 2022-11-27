import React from 'react'
import styles from "../styles/Home.module.css";

const StatsBox = ({title, desc,status}) => {
  return (
    <div className={styles.statsdiv}>
        <div className={styles.statssmallbox}></div>
        <div className={styles.statsbigbox}>
          <div className={styles.statstitle}>{title}</div>
          <div className={styles.statsdescription}>{desc}</div>
          <div className={styles.statsstatus}>{status}</div>
        </div>
    </div>
  )
}

export default StatsBox