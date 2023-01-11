import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Card from "../../Components/Card";
import { Col, Container, Row } from "react-grid-system";
import BuyCard from "../../Components/BuyCard";
import { setConfiguration } from 'react-grid-system';
import Sub from "../../Components/Sub";
import MyEvents from "../../Containers/EventsPage/MyEvents";
import ActiveEvents from "../../Containers/EventsPage/ActiveEvents";
import PastEvents from "../../Containers/EventsPage/PastEvents";



 
export default function Index () {
  const [eventsComp, setEventsComp] = useState("My Events");
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ overflow: "hidden" }}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Menu></Menu>
          <div style={{width:"100%", display: "flex" , flexDirection:"column"}}>
            <Sub
              setGamesComp={setEventsComp}
              selection={eventsComp}
              item1="My Events"
              item2="Active Events"
              item3="Past Events"
            ></Sub>
            {eventsComp === "My Events" ? (
              <MyEvents />
            ) : eventsComp === "Active Events" ? (
              <ActiveEvents />
            ) : (
              <PastEvents />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};


