import React from "react";
import Post from "../../Components/Post";
import styles from "../../styles/Home.module.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
const index = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
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
        <Footer></Footer>
      </main>
    </div>
  );
};

export default index;
