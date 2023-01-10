import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import styles from "../styles/Home.module.css";
import LoginButton from "./LoginButton";
import MobileMenu from "./MobileMenu";
import MobileProfile from "./MobileProfile";
import ProfileMenu from "./ProfileMenu";
import WalletButton from "./WalletButton";
const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.header}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
       <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <div style={{paddingLeft:40}}><MobileMenu></MobileMenu></div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
        <a style={{ color: "inherit", minWidth:100 }} href="/">
          <img className={styles.img} src="./assets/i/logo.png"></img>
        </a></div>  <MobileProfile/></div></div>
        <div
          style={{ display: "flex", marginRight: 110, alignItems: "center" }}
        >
          <div></div>
          <WalletButton></WalletButton>
          <ProfileMenu lvl="LVL 0" name="sticky berkin" />
        

          <a style={{ color: "inherit" }} href="/login">
            <LoginButton
              text="Login In"
              color="#40009366"
              border="3px solid #400093"
            ></LoginButton>
          </a>

          <a href="/register" style={{ color: "inherit" }}>
            <LoginButton
              text="Sign Up"
              color="#FECE0066"
              border="3px solid #FECE00"
            ></LoginButton>
          </a>
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
