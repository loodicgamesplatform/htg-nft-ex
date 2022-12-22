import React, { useState } from "react";

import styles from "../../styles/Home.module.css";

import Header from "../../Components/Header";

import Menu from "../../Components/Menu";

import Sub from "../../Components/Sub";
import Channels from "../../Containers/ForumPage/Channels";
import MyPosts from "../../Containers/ForumPage/MyPosts";
import AllPosts from "../../Containers/ForumPage/AllPosts";
const index = () => {
  const [forumComp, setForumComp] = useState("Channels");
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <Menu></Menu>
          </div>
          <div style={{width:"100%", display: "flex" , flexDirection:"column"}}>
            <Sub
              setGamesComp={setForumComp}
              selection={forumComp}
              item1="Channels"
              item2="My Posts"
              item3="All Posts-"
            ></Sub>
            {forumComp === "Channels" ? (
              <Channels />
            ) : forumComp === "My Posts" ? (
              <MyPosts />
            ) : (
              <AllPosts />
            )}
          </div>
       
        </div>
      </main>
    </div>
  );
};

export default index;
