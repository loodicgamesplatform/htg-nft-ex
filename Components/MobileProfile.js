import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { React, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../styles/Home.module.css";
import MobileProfileDrop from "./MobileProfileDrop";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 30,
          marginLeft: 20,
        }}
      >
        <div className={styles.mobileprofilediv}>
          <div
            style={{
              backgroundColor: open ? "#FECE00" : "#FECE0066",
              color: open ? "#00000080" : "",
              display: "flex",
              paddingLeft: 15,
              paddingTop: 5,
              borderRadius: 10,
              paddingBottom: 5,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                marginRight: 10,
                backgroundColor: "white",
              }}
            ></div>

            <div
              onClick={handleOpen}
              style={{
                paddingRight: 10,
                marginLeft: 10,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {open ? (
                <FeatherIcon icon="arrow-up-circle" />
              ) : (
                <FeatherIcon icon="arrow-down-circle" />
              )}
            </div>
          </div>
        </div>
        {open ? <MobileProfileDrop setOpen={open} /> : null}
      </div>
    </OutsideClickHandler>
  );
};

export default MobileProfile;
