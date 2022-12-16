import React from "react";
import MenuButton from "./MenuButton";
import styles from "../styles/Home.module.css";
const Menu = ({ text, img, color }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        position: "relative",
        width: 300,
        overflow: "hidden",
        justifyContent: "center",
        borderRight: "1px solid #FFFFFC1A",
        marginTop: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          height: "100%",
        }}
      >
        <MenuButton
          style={{ marginTop: 15 }}
          text="PROFILE"
          color="#FECE00"
          image="./assets/menuicons/Profile.png"
        ></MenuButton>
        <a href="/market" style={{ color: "inherit" }}>
          <MenuButton
            text="MARKET"
            color="#FF6A00"
            image="./assets/menuicons/Market.png"
          ></MenuButton>
        </a>
        <MenuButton
          text="GAMES"
          color="#FF0000"
          image="./assets/menuicons/Games.png"
        ></MenuButton>
        <a style={{ color: "inherit" }} href="/events">
          <MenuButton
            text="EVENTS"
            color="#F700FF"
            image="./assets/menuicons/Events.png"
          ></MenuButton>
        </a>
        <a style={{ color: "inherit" }} href="/voting">
          <MenuButton
            text="VOTING"
            color="#400093"
            image="./assets/menuicons/voting.png"
          ></MenuButton>
        </a>
        <a
          style={{ color: "inherit" }}
          href="/forum"
         
        >
          <MenuButton text="FORUM" color="#048BA8" image="./assets/menuicons/forum.png"></MenuButton>
        </a>
        <MenuButton
          text="STATS"
          color="#007dff"
          image="./assets/menuicons/Stats.png"
        ></MenuButton>
      </div>
    </div>
  );
};

export default Menu;
