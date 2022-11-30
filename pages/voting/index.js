import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import VotesBox from '../../Components/VotesBox'
import VotesMenu from '../../Components/VotesMenu';
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <Header></Header>
      <VotesMenu></VotesMenu>
      <div style={{ display: "flex" }}>
        <VotesBox
          status="Coming Soon"
          title="Quest"
          desc="Quests Leaderboard of requirements and quests."
        ></VotesBox>
        <VotesBox
          status="Coming Soon"
          title="Best Look"
          desc="Best LookResults of “Vote for the best look”."
        ></VotesBox>
        
      </div>
      <div style={{ display: "flex" }}>
        <VotesBox
          status="Coming Soon"
          title="Quest"
          desc="Quests Leaderboard of requirements and quests."
        ></VotesBox>
        <VotesBox
          status="Coming Soon"
          title="Best Look"
          desc="Best LookResults of “Vote for the best look”."
        ></VotesBox>
        
      </div>
      <div style={{ display: "flex" }}>
        <VotesBox
          status="Coming Soon"
          title="Quest"
          desc="Quests Leaderboard of requirements and quests."
        ></VotesBox>
        <VotesBox
          status="Coming Soon"
          title="Best Look"
          desc="Best LookResults of “Vote for the best look”."
        ></VotesBox>
        
      </div>

      <Footer></Footer>
    </main>
  </div>
  )
}

export default index