import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import MobileLoginButton from "./MobileLoginButton";
import MobileMenu from "./MobileMenu";
import ProfileMenu from "./ProfileMenu";
import WalletButton from "./WalletButton";
import MenuButton from "./MenuButton";
const MobileMenuDrop = ({onClose}) => {
  
  return (
    <div className={styles.mobileside}>
      <div onClick={onClose} style={{width:"100%" , display:"flex",color:"#FECE00" , justifyContent:"flex-end",paddingTop:20,paddingRight:20}}>
        <FeatherIcon icon="x" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <div style={{ padding: 10 }}>
          <a style={{ color: "inherit" }} href="/login">
            <MobileLoginButton
              text="Login In"
              color="#FECE00"
              textColor="#400093"
              border="3px solid #400093"
            ></MobileLoginButton>
          </a> 
        </div>
       
        <div style={{ padding: 10 }}>
          <a href="/register" style={{ color: "inherit" }}>
            <MobileLoginButton
              text="Sign Up"
              textColor="#400093"
              color="#FECE00"
              border="3px solid #400093"
            ></MobileLoginButton>
          </a>
        </div>
      </div>

      <div class={styles.profileli}></div>
      <div class={styles.mobilemenuli}>
        <a href="/profile" style={{ color: "inherit" }}>
          PROFILE
        </a>
      </div>
      <div class={styles.mobilemenuli}>
        <a href="/market" style={{ color: "inherit" }}>
          MARKET
        </a>
      </div>
      <div class={styles.mobilemenuli}>
        <a href="/games" style={{ color: "inherit" }}>
          GAMES
        </a>
      </div>
      <div class={styles.mobilemenuli}>
        <a href="/events" style={{ color: "inherit" }}>
          EVENTS
        </a>
      </div>
      <div class={styles.mobilemenuli}>
        <a href="/voting" style={{ color: "inherit" }}>
          VOTING
        </a>
      </div>
      <div class={styles.mobilemenuli}>
        <a href="/forum" style={{ color: "inherit" }}>
          FORUM
        </a>
      </div>
    </div>
  );
};

export default MobileMenuDrop;
