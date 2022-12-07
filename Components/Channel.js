import React from "react";
import styles from "../styles/Home.module.css";
const Channel = () => {
  return (
    <div className={styles.channelcontainer}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.channeltitle}>GENERAL DISCUSSION</div>{" "}
          <div>
            <img src="./assets/i/image.png"></img>
          </div>
         
            <div className={styles.channelsubtitle}>
              Share stories, ideas, memes and more!
            </div>
         
        </div>
        <div className={styles.channeltitle}>FOLLOW</div>
      </div>
    </div>
  );
};

export default Channel;
