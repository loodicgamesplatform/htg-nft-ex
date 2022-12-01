import React from "react";
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{ display: "flex" }}></div>

        <Footer></Footer>
      </main>
    </div>
  );
};

export default index;
