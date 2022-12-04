import React from "react";
import Post from "../../Components/Post";
import styles from "../../styles/Home.module.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Channel from "../../Components/Channel";
const index = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{display:"flex", flexDirection:"column"}}>
        <div className={styles.channels}>CHANNELS</div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}> 
          <Channel></Channel>
          <Channel></Channel>
        </div>
        <div className={styles.newpost}>NEW POST</div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          
          <Post
            title="Hello Stickies!"
            sub="#General-Discussion"
            post="First Post Belongs to ME!"
          ></Post>
          <Post
            title="Hello Stickies!"
            sub="#General-Discussion"
            post="First Post Belongs to ME!"
          ></Post>
          <Post
            title="Hello Stickies!"
            sub="#General-Discussion"
            post="First Post Belongs to ME!"
          ></Post>
        </div></div>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default index;
