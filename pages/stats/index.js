import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import StatsBox from '../../Components/StatsBox';
import styles from "../../styles/Home.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <StatsBox
            status="Coming Soon"
            title="Quest"
            desc="Quests Leaderboard of requirements and quests."
          ></StatsBox>
          <StatsBox
            status="Coming Soon"
            title="Best Look"
            desc="Best LookResults of “Vote for the best look”."
          ></StatsBox>
          
        </div>

        <Footer></Footer>
      </main>
    </div>
  )
}

export default index