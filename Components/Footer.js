import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.img} src="./assets/i/htg.png"></img>
      <div className={styles.footerdiv}>
        <div style={{ display: "flex", marginLeft: 40 }}>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFC1A",
              width: 40,
              height: 40,
              marginRight: 20,
            }}
          ></div>
        </div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "right" }}
        >
          <div className={styles.headerindiv}>Terms of Service</div>
          <div className={styles.headerindiv}>Privacy</div>
          <div className={styles.headerindiv}>Help</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
