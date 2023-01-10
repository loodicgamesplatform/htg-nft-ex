import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const MobileWalletButton = () => {
  const [account, setAccount] = useState("");
  const [balance,setBalance] = useState("")
  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const newSigner = provider.getSigner();
     

      setAccount(accounts[0]); 
    
      setBalance(balance)
    } else {
      console.log("Please install metamask");
    }
  };
  useEffect(() => {
    initConnection();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <div className={styles.mobilewalletbutton} onClick={initConnection}>
        {account != "" ? (
          <p className={styles.mobilewalletid}>{"ID: " + account.substring(0, 9)}</p>
        ) : (
         <FeatherIcon icon="credit-card"></FeatherIcon>
        
        )}
        
      </div>
    </div>
  );
};

export default MobileWalletButton;
