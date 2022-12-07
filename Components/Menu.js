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
        ></MenuButton>
     
        <MenuButton text="MARKET" color="#FF6A00"></MenuButton>
        <MenuButton text="GAMES" color="#FF0000"></MenuButton>
        <MenuButton text="EVENTS" color="#F700FF"></MenuButton>
        <MenuButton text="VOTING" color="#400093"></MenuButton>
           <a style={{color: "inherit"}} href="/forum"><MenuButton text="FORUM" color="#048BA8"></MenuButton></a>
        <MenuButton text="STATS" color="#007dff"></MenuButton>
      </div>
    </div>
  );
};

export default Menu;
