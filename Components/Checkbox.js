import React from "react";
import styles from "../styles/Home.module.css";
const Checkbox = ({ desc }) => {
  return (
    <div>
      <div style={{ display: "flex", paddingTop:10 }}>
        <input
          type="checkbox"
          style={{
            display: "flex",
            minWidth: 20,
            minHeight: 20,
            border: "1px solid #FFFFFF",
            background: "#D9D9D900",
          }}
        ></input>
        <div className={styles.checkboxdesc}>{desc}</div>
      </div>
    </div>
  );
};

export default Checkbox;
