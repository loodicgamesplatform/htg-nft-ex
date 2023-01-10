import React from "react";
import { Col, Container, Row } from "react-grid-system";

import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import styles from "../../styles/Home.module.css";
const index = () => {
  return (
    <div
      className={styles.container}
      
    >
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
                WELCOME TO LOODIC GAMES PLATFORM
              </div>
            </Col>

            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div
                style={{
                  marginTop: 30,
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <a href="/" style={{ color: "inherit" }}>
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
                </div>

                <Input title="E-mail" placeholder="Email Address"></Input>
                <Input title="Password" placeholder="Password"></Input>
                <Input title="Confirm Password" placeholder="Password"></Input>
                <Input
                  title="Username"
                  placeholder="Other players see this name in the game"
                  subtitle="You can change this at a later point."
                ></Input>
                <Input
                  title="Referral Code (optional)"
                  placeholder="ex: XXXX-XXXX"
                  subtitle="This would have been given to you by another players."
                ></Input>
                <Checkbox desc="I accept the Terms of Service and Privacy Policy"></Checkbox>
                <Checkbox desc="I want exclusive items and stay up to date with the latest news, releases, and events"></Checkbox>

                <a href="/done" style={{ color: "inherit" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      marginTop: 20,
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
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default index;
