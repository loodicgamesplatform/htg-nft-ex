import React from 'react'
import styles from "../styles/Home.module.css";
const Input = ({placeholder, title, subtitle=""}) => {
  return (
    <div style={{paddingTop:8}}>
      <div className={styles.inputtitle}>{title}</div>
        <input placeholder={placeholder} className={styles.input}></input>
        <div className={styles.inputsubtitle}>{subtitle}</div>
    </div>
  )
}

export default Input