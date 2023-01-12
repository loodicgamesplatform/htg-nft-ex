import React from "react";
import { Col, Container, Row } from "react-grid-system";
import Link from "next/link";
import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import styles from "../../styles/Home.module.css";
export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.logindiv}>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div
                className={styles.purplebig}
                style={{
                  height: 600,

                  backgroundColor: "#FECE00",
                  borderRadius: 10,
                  marginTop: 135,
                  textAlign: "center",
                }}
              >
                {" "}
                WELCOME TO LOODIC GAMES PLATFORM
              </div>
            </Col>

            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div
                style={{
                  marginTop: 100,
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link legacyBehavior href="/main">
                    <a style={{ color: "inherit" }}>
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          border: "3px solid #FFFFFC",
                          borderRadius: 5,
                          textAlign: "center",

                          fontWeight: 700,
                        }}
                      >
                        X
                      </div>
                    </a>
                  </Link>
                </div>
                <Input title="E-mail" placeholder="Email Address"></Input>
                <Input title="Password" placeholder="Password"></Input>
                <div className={styles.passtext}>Forgot Password</div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: 20,
                    justifyContent: "center",
                    textAlign: "center",

                    borderRadius: 10,
                    height: 50,
                    border: "5px solid #404040",
                    backgroundColor: "#40404066",
                    marginBottom: 20,
                  }}
                >
                  <Link legacyBehavior href="/main">
                    <a style={{ color: "inherit" }}>
                      <div className={styles.votesmenutitle}>Login In</div>
                    </a>
                  </Link>
                </div>
                <div className={styles.textmin} style={{ textAlign: "center" }}>
                  Dont have an account?
                </div>{" "}
                <Link legacyBehavior href="/register">
                  <a style={{ color: "inherit" }}>
                    
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        marginTop: 10,
                        justifyContent: "center",
                        textAlign: "center",

                        borderRadius: 10,
                        height: 50,
                        border: "5px solid #FECE00",
                        backgroundColor: "#FECE0066",
                        marginBottom: 50,
                      }}
                    >
                    <div className={styles.votesmenutitle}>Sign Up</div>
                  </div></a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
