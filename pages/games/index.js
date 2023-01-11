import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

import Header from "../../Components/Header";

import Menu from "../../Components/Menu";
import Sub from "../../Components/Sub";
import MyGames from "../../Containers/GamesPage/MyGames";
import AllGames from "../../Containers/GamesPage/AllGames";
import Upcoming from "../../Containers/GamesPage/Upcoming";

  export default function Index () {
  const [gamesComp, setGamesComp] = useState("My Games");
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ overflow: "hidden" }}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Menu></Menu>
          <div style={{width:"100%", display: "flex" , flexDirection:"column"}}>
            <Sub
              setGamesComp={setGamesComp}
              selection={gamesComp}
              item1="My Games"
              item2="All Games"
              item3="Upcoming Games"
            ></Sub>
            {gamesComp === "My Games" ? (
              <MyGames />
            ) : gamesComp === "All Games" ? (
              <AllGames />
            ) : (
              <Upcoming />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};


