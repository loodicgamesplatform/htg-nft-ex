import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { React, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../styles/Home.module.css";
import ProfileDrop from "./ProfileDrop";

const MobileProfile = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  return (
    <OutsideClickHandler
    onOutsideClick={() => {
      setOpen(false);
    }}
  >
    <div style={{ display: "flex", flexDirection: "column",padding:30 }}>
      <div  className={styles.mobileprofilediv}>
      <div
        style={{
          backgroundColor: open ? "#FECE00" : "#FECE0066",
          color: open ? "#00000080" : "",
          paddingLeft:10,
          display:"flex",
          marginRight:20,
          paddingLeft:15,
          paddingTop:5,
          borderRadius:10,
          paddingBottom:5,
        }}
      >
     
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
           marginRight:10,
            backgroundColor: "white",
          }}
        ></div>
     
        <div
          onClick={handleOpen}
          style={{
            paddingRight: 10,
            marginLeft:10,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FeatherIcon icon="arrow-down-circle" />
        </div>
      </div></div>
      {open ? <ProfileDrop setOpen={open} /> : null}
    </div>
  </OutsideClickHandler>
  )
}

export default MobileProfile