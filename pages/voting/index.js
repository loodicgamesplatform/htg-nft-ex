import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Card from "../../Components/Card";
import { Col, Container, Row } from "react-grid-system";
import BuyCard from "../../Components/BuyCard";
import MyVotes from "../../Containers/VotesPage/MyVotes";
import ActiveVotes from "../../Containers/VotesPage/ActiveVotes";
import PastVotes from "../../Containers/VotesPage/PastVotes";
import Sub from "../../Components/Sub";



export default function Index () {
const [votesComp, setVotesComp] = useState("My Votes");
  
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ overflow: "hidden" }}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Menu></Menu>
          <div style={{width:"100%", display: "flex" , flexDirection:"column"}}>
            <Sub
              setGamesComp={setVotesComp}
              selection={votesComp}
              item1="My Votes"
              item2="Active Votes"
              item3="Past Votes"
            ></Sub>
            {votesComp === "My Votes" ? (
              <MyVotes />
            ) : votesComp === "Active Votes" ? (
              <ActiveVotes />
            ) : (
              <PastVotes />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

