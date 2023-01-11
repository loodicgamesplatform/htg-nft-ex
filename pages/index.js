import { ConnectWallet } from "@thirdweb-dev/react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import StatsBox from "../Components/StatsBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Link rel="preload" href="./public/assets/fonts/Jost-SemiBold.ttf">
    <div className={styles.container}>
      <main className={styles.main}  style={{ overflow: "hidden"}}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Menu></Menu>
          
          <div>HTG</div>
        </div>
       
      </main>
    </div></Link>
  );
}
