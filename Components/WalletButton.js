import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
const WalletButton = () => {
   const [account, setAccount] = useState("");
  const initConnection = async () => {
   
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const newSigner = provider.getSigner();
    
      setAccount(accounts[0]);
    } else {
      console.log("Please install metamask");
    }
  };
  useEffect(() => {
    initConnection();
  }, []);
  return (
    
    <div className={styles.walletbutton} onClick={initConnection}>
       {account != "" ? (
          <p className={styles.walletid}>{"ID: " + account.substring(0, 9)}</p>
        ) : (<div>CONNECT WALLET</div>)}
    </div>
  );
};

export default WalletButton;
