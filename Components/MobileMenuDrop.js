import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import MobileLoginButton from "./MobileLoginButton";

import Link from "next/link";
const MobileMenuDrop = ({ onClose }) => {
  return (
    <div className={styles.mobileside}>
      <div
        onClick={onClose}
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex",
          color: "#FECE00",
          justifyContent: "flex-end",
          paddingTop: 20,
          paddingRight: 20,
        }}
      >
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
          <Link href="/login">
            <MobileLoginButton
              text="Login In"
              color="#FECE00"
              textColor="#400093"
              border="3px solid #400093"
            ></MobileLoginButton>
          </Link>
        </div>

        <div style={{ padding: 10 }}>
          <Link href="/register">
            <MobileLoginButton
              text="Sign Up"
              textColor="#400093"
              color="#FECE00"
              border="3px solid #400093"
            ></MobileLoginButton>
          </Link>
        </div>
      </div>

      <div class={styles.profileli}></div>
      <div class={styles.mobilemenuli}>
        <Link href="/profile">
          <a style={{ color: "inherit" }}>PROFILE</a>
        </Link>
      </div>
      <div class={styles.mobilemenuli}>
        <Link href="/market">
          <a style={{ color: "inherit" }}>MARKET</a>
        </Link>
      </div>
      <div class={styles.mobilemenuli}>
        <Link href="/games">
         
          <a style={{ color: "inherit" }}>GAMES </a>
        </Link>
      </div>
      <div class={styles.mobilemenuli}>
        <Link href="/events">
   
          <a style={{ color: "inherit" }}>EVENTS</a>
        </Link>
      </div>
      <div class={styles.mobilemenuli}>
        <Link href="/voting">
   
          <a style={{ color: "inherit" }}>VOTING </a>
        </Link>
      </div>
      <div class={styles.mobilemenuli}>
        <Link href="/forum">
          <a style={{ color: "inherit" }}>FORUM </a>
        </Link>
      </div>
      <div class={styles.mobilemenuli}>
        <Link href="/stats">
       
          <a style={{ color: "inherit" }}>STATS </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuDrop;
