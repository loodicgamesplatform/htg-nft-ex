import React from 'react'
import styles from "../styles/Home.module.css";
const Input = ({placeholder, title, subtitle="", disabled = false,change = false}) => {
  return (
    <div style={{paddingTop:8}}>
      <div className={styles.inputtitle}>{title}</div>
        <input  onChange={(e) => {
          if (change && !disabled) {
            change(e.target.value);
          }
        }} placeholder={placeholder} className={styles.input}></input>
        <div className={styles.inputsubtitle}>{subtitle}</div>
    </div>
  )
}

export default Input