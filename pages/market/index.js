import React, { useState } from "react";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Sub5 from "../../Components/Sub5";
import Characters from "../../Containers/MarketPage/Characters";
import Others from "../../Containers/MarketPage/Others";
import Planets from "../../Containers/MarketPage/Planets";
import Tickets from "../../Containers/MarketPage/Tickets";
import Wearables from "../../Containers/MarketPage/Wearables";
import styles from "../../styles/Home.module.css";


export default function Index (){
  const [marketComp, setMarketComp] = useState("Characters");
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
              setGamesComp={setMarketComp}
              selection={marketComp}
              item1="Characters"
              item2="Wearables"
              item3="Tickets"
              item4="Planets"
              item5="Others"
            ></Sub5>
            {marketComp === "Characters" ? (
              <Characters />
            ) : marketComp === "Wearables" ? (
              <Wearables />
            ) : marketComp === "Tickets" ? (
              <Tickets />
            ) : marketComp === "Planets" ? (
              <Planets />
            ) : (
              <Others />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};


