import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LoginButton from "../Components/LoginButton";
import Menu from "../Components/Menu";
import MobileLoginButton from "../Components/MobileLoginButton";
import StatsBox from "../Components/StatsBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",

          backgroundImage: "url(./assets/i/screen.png)",

          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          style={{
            width: 250,
            position: "absolute",
            marginLeft: 80,
            marginTop: "auto",
          }}
          className={styles.punkpose}
          src="./assets/i/punk_pose.png"
        ></img>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <img
            className={styles.landlogo}
            style={{}}
            src="./assets/i/logo.png"
          ></img>

          <div style={{ padding: 10 }}>
            <Link legacyBehavior href="/login">
              <a style={{ color: "inherit" }}>
                <MobileLoginButton
                  text="Login In"
                  color="#40009366"
                  border="3px solid #400093"
                ></MobileLoginButton>
              </a>
            </Link>
          </div>

          <div style={{ padding: 10 }}>
            <Link legacyBehavior href="/register">
              <a style={{ color: "inherit" }}>
                <MobileLoginButton
                  text="Sign Up"
                  color="#FECE0066"
                  border="3px solid #FECE00"
                ></MobileLoginButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
