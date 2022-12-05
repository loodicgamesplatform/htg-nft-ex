import React from "react";
import styles from "../styles/Home.module.css";
const MenuButton = ({ color, border, text }) => {
  return (
    <div
      className={styles.loginfont}
      style={{
        width: 220,
        height: 60,
        borderRadius: 5,
        backgroundColor: `${color}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #FFFFFC",

        marginBottom: 15,
        marginTop: 15,
      }}
    >
      <div style={{ paddingRight: 30 }}>{text}</div>
    </div>
  );
};

export default MenuButton;
