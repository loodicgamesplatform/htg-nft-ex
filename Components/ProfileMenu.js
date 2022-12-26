import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { React, useState } from "react";
import styles from "../styles/Home.module.css";
import ProfileDrop from "./ProfileDrop";

const ProfileMenu = ({ lvl, image, name }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className={styles.profilemenudiv}
        style={{
          backgroundColor: open ? "#FECE00" : "#FECE0066",
          color: open ? "#00000080" : "",
        }}
      >
        <div style={{ padding: 20 }}>{lvl}</div>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            backgroundColor: "white",
          }}
        ></div>
        <div style={{ padding: 20, textTransform: "uppercase" }}>{name}</div>
        <div
          onClick={handleOpen}
          style={{
            paddingRight: 20,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FeatherIcon icon="arrow-down-circle" />
        </div>
      </div>
      {open ? <ProfileDrop /> : null}
    </div>
  );
};

export default ProfileMenu;
