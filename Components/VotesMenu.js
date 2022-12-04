import React from "react";
import styles from "../styles/Home.module.css";
const VotesMenu = () => {
  return (
    <div>
      <div className={styles.votesmenudiv}>
        <div style={{ display: "flex", direction: "column" }}>
          <div>
            <div
              className={styles.votesmenutitle}
              style={{ background: "rgba(217, 217, 217, 0.2)" }}
            >
              Active Votes
            </div>
          </div>
          <div>
            <div className={styles.votesmenutitle}>Past Votes</div>
          </div>
          <div>
            <div className={styles.votesmenutitle}>My Votes</div>
          </div>
        </div>
        <div
          style={{ height: 2, backgroundColor: "white", width: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default VotesMenu;
