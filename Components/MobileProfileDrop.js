import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import styles from "../styles/Home.module.css";
import MobileWalletButton from "./MobileWalletButton";

const MobileProfileDrop = () => {
  return (
    <div className={styles.mobileprofiledrop}>
      <div class={styles.profileli}>
        <MobileWalletButton />
      </div>
     
      <div class={styles.profileli}>My Wallet</div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div  class={styles.logouttext}>
          LOG OUT
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 30,
        }}
      ></div>
    </div>
  );
};

export default MobileProfileDrop;
