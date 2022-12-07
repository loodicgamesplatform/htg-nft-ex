import React from "react";
import styles from "../styles/Home.module.css";
const LoginButton = ({ color, text, border }) => {
  return (
    <div
      className={styles.loginfont}
      style={{
        width: 150,
        height: 55,
        borderRadius: 5,
        backgroundColor: `${color}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `${border}`,
        marginLeft: 21,
  
      }}
    >
      {text}
    </div>
  );
};

export default LoginButton;
