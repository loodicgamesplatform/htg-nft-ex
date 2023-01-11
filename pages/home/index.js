import React from "react";
import Header from "../../Components/Header";
import styles from "../../styles/Home.module.css";

export default function Index (){
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{ display: "flex" }}></div>

       
      </main>
    </div>
  );
};


