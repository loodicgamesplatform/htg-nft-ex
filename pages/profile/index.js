import React, { useState } from "react";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Sub5 from "../../Components/Sub5";
import Career from "../../Containers/ProfilePage/Career";
import Clan from "../../Containers/ProfilePage/Clan";
import Dashboard from "../../Containers/ProfilePage/Dashboard";
import Friends from "../../Containers/ProfilePage/Friends";
import Inventory from "../../Containers/ProfilePage/Inventory";

import styles from "../../styles/Home.module.css";
const index = () => {
  const [profileComp, setProfileComp] = useState("Dashboard");

  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ overflow: "hidden" }}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Menu></Menu>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Sub5
              setGamesComp={setProfileComp}
              selection={profileComp}
              item1="Dashboard"
              item2="Inventory"
              item3="Career"
              item4="Friends"
              item5="Clan"
            ></Sub5>
            {profileComp === "Dashboard" ? (
              <Dashboard />
            ) : profileComp === "Inventory" ? (
              <Inventory />
            ) : profileComp === "Career" ? (
              <Career />
            ) : profileComp === "Friends" ? (
              <Friends />
            ) : (
              <Clan />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
