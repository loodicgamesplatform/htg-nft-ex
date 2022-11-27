import { ConnectWallet } from "@thirdweb-dev/react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import StatsBox from "../Components/StatsBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{ display: "flex" }}>
         
        </div>

        <Footer></Footer>
      </main>
    </div>
  );
}
