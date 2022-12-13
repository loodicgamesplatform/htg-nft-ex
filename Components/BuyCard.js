import React from "react";
import styles from "../styles/Home.module.css";

const BuyCard = () => {
  return (
    <div className={styles.carddiv}>
      <div style={{marginTop:"auto",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className={styles.cardbutton}>See Details</div>
        <div style={{marginTop:10}} className={styles.buycardbutton}>BUY</div>
      </div>
    </div>
  );
};

export default BuyCard;
