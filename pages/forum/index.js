import React from "react";
import Post from "../../Components/Post";
import styles from "../../styles/Home.module.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Channel from "../../Components/Channel";
import Menu from "../../Components/Menu";
import LoginButton from "../../Components/LoginButton";
const index = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <Menu></Menu>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div style={{paddingRight:30, display: "flex",alignItems:"center", justifyContent:"space-between" }}>
              <div className={styles.channels}>CHANNELS</div>
              <LoginButton
                text="Create New Post"
                color="#40009366"
                border=" 2px solid #400093"
              ></LoginButton>
            </div>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
