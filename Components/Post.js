import React from "react";
import styles from "../styles/Home.module.css";

const Post = ({ title, sub, post }) => {
  return (
    <div className={styles.postcontainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 70,
              height: 65,
              borderRadius: 10,
              backgroundColor: "#FECE00",
              marginTop: 16,
              marginLeft: 25,
            }}
          ></div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.postname}>Sticky Berkin</div>
            <div className={styles.postdate}>30 SEP</div>{" "}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <div className={styles.posttitle}>{title}</div>
          <div className={styles.postsub}>{sub}</div>
          <div className={styles.postpost}>{post}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
