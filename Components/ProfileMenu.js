import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { React, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../styles/Home.module.css";
import ProfileDrop from "./ProfileDrop";

const ProfileMenu = ({ lvl, image, name }) => {
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
             {open ? <FeatherIcon icon="arrow-up-circle" />  :<FeatherIcon icon="arrow-down-circle" /> }
          </div>
        </div>
        {open ? <ProfileDrop setOpen={open} /> : null}
      </div>
    </OutsideClickHandler>
  );
};

export default ProfileMenu;
