import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import styles from "../styles/Home.module.css";
import LoginButton from "./LoginButton";
import WalletButton from "./WalletButton";
const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.header}>
        <a style={{ color: "inherit" }} href="/">
          <img className={styles.img} src="./assets/i/logo.png"></img>
        </a>
        <div style={{ display: "flex", marginRight: 110, marginTop: 20 }}>
          <LoginButton
            text="Login In"
            color="#40009366"
            border="3px solid #400093"
          ></LoginButton>
          <LoginButton
            text="Sign In"
            color="#FECE0066"
            border="3px solid #FECE00"
          ></LoginButton>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*<div className={styles.header}>
<div className={styles.logo}>
<img className={styles.img} src="./assets/i/htg.png"></img></div>
<div className={styles.headerdiv}>
<div className={styles.headerindiv}>Games</div>
<div className={styles.headerindiv}>Events</div>
<div className={styles.headerindiv}>Marketplace</div>
<div className={styles.headerindiv}>Stats</div>
<div className={styles.headerindiv}>Voting</div>
<div className={styles.headerindiv}>Forum</div>
</div>

<ConnectWallet accentColor="#FECE00"></ConnectWallet>
</div>*/
