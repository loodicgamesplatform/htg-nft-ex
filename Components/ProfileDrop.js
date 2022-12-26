import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../styles/Home.module.css";
const ProfileDrop = () => {
  return (
    <div className={styles.profiledropdown}>
      <div class={styles.profileli}></div>
      <div class={styles.profileli}>My Wallet</div>
      <div class={styles.profileli}>My Profile </div>
      <div class={styles.profileli}>Settings</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <div style={{ paddingLeft: 45 }} class={styles.helptext}>
          HELP
        </div>
        <FeatherIcon icon="settings" style={{ color: " rgba(64, 0, 147)" }} />
        <div style={{ paddingRight: 20 }} class={styles.logouttext}>
          LOG OUT
        </div>
      </div>
    </div>
  );
};

export default ProfileDrop;
