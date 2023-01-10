import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import MobileMenuDrop from "./MobileMenuDrop";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.mobilemenudiv}>
      <div onClick={handleOpen} style={{ display: "flex", cursor:"pointer"}}>
        <FeatherIcon icon="menu" ></FeatherIcon>
      </div>
      {open ? <MobileMenuDrop setOpen={open} onClose={() => setOpen(false)} /> : null}
    </div>
  );
};

export default MobileMenu;
