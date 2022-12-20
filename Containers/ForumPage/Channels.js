import React from 'react'
import Channel from '../../Components/Channel'
import LoginButton from '../../Components/LoginButton'
import Post from '../../Components/Post'
import styles from "../../styles/Home.module.css";
const Channels = () => {
  return (
    <div
    style={{ display: "flex", flexDirection: "column", width: "100%" }}
  >
    <div
      style={{
        paddingRight: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ paddingLeft: 30, paddingTop: 50, paddingBottom: 35 }}
      >
        <LoginButton
          text="Create New Post"
          color="#40009366"
          border=" 2px solid #400093"
        ></LoginButton>
      </div>
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
  )
}

export default Channels