import React from "react";
import MenuButton from "./MenuButton";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Menu = ({ text, img, color }) => {
  return (
    <div className={styles.sidemenudiv}>
      <div className={styles.sidemenuindiv}>
        <Link legacyBehavior href="/profile">
          <a style={{color:"inherit"}}>
            <MenuButton
              style={{ marginTop: 15 }}
              text="PROFILE"
              color="#FECE00"
              image="./assets/menuicons/Profile.png"
            ></MenuButton>
          </a>
        </Link>
        <Link legacyBehavior href="/market">
          <a  style={{color:"inherit"}}>
            <MenuButton
              text="MARKET"
              color="#FF6A00"
              image="./assets/menuicons/Market.png"
            ></MenuButton>
          </a >
        </Link>
        <Link legacyBehavior  href="/games">
          <a  style={{color:"inherit"}}>
            <MenuButton
              text="GAMES"
              color="#FF0000"
              image="./assets/menuicons/Games.png"
            ></MenuButton>
          </a>
        </Link>
        <Link legacyBehavior href="/events">
          <a  style={{color:"inherit"}}>
          <MenuButton
            text="EVENTS"
            color="#F700FF"
            image="./assets/menuicons/Events.png"
          ></MenuButton></a>
        </Link>
        <Link legacyBehavior href="/voting">
          <a  style={{color:"inherit"}}>
          <MenuButton
            text="VOTING"
            color="#400093"
            image="./assets/menuicons/voting.png"
          ></MenuButton></a>
        </Link>
        <Link legacyBehavior href="/forum">
          <a  style={{color:"inherit"}}>
          <MenuButton
            text="FORUM"
            color="#048BA8"
            image="./assets/menuicons/forum.png"
          ></MenuButton></a>
        </Link>
        <Link legacyBehavior href="/stats">
          <a  style={{color:"inherit"}}>
          <MenuButton
            text="STATS"
            color="#007dff"
            image="./assets/menuicons/Stats.png"
          ></MenuButton></a>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
