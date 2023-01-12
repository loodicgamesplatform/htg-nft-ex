import styles from "../../styles/Home.module.css";

import Header from "../../Components/Header";
import Menu from "../../Components/Menu";




export default function Home() {
    return (
     
      <div className={styles.container}>
        <main className={styles.main}  style={{ overflow: "hidden"}}>
          <Header></Header>
          <div style={{ display: "flex" }}>
            <Menu></Menu>
            
            <div>HTG</div>
          </div>
         
        </main>
      </div>
    );
  }