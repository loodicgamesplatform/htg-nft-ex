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
        position: "absolute",
        width: 300,
        overflow: "hidden",
        justifyContent: "center",
        borderRight: "1px solid #574C1A",
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
        <MenuButton text="FORUM" color="#048BA8"></MenuButton>
        <MenuButton text="STATS" color="#007dff"></MenuButton>
      </div>
    </div>
  );
};

export default Menu;
