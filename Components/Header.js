import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import styles from "../styles/Home.module.css";
const Header = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className={styles.header}>
        <img className={styles.img} src="./assets/i/htg.png"></img>
    </div>
<div className={styles.headerdiv}>
<div className={styles.headerindiv}>Games</div>
<div className={styles.headerindiv}>Events</div>
<div className={styles.headerindiv}>Marketplace</div>
<div className={styles.headerindiv}>Stats</div>
<div className={styles.headerindiv}>Voting</div>
<div className={styles.headerindiv}>Forum</div>
</div></div>
    
    
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