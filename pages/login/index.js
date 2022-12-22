import React from "react";
import { Col, Container, Row } from "react-grid-system";

import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import styles from "../../styles/Home.module.css";
const index = () => {
  return (
    <div className={styles.container} style={{ height: "100%", width: "100%" }}>
      <Container>
        <Row>
          <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div  className={styles.purplebig}
              style={{
                height: 600,
                width: "100%",
                backgroundColor: "#FECE00",
                borderRadius: 10,
                marginTop: 135,
                textAlign:"center"
              }}
            >  WELCOME TO LOODIC GAMES PLATFORM
            </div>
          </Col>

          <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              style={{
                marginTop: 100,
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
               <a href="/" style={{color:"inherit"}}>
                <div
                  
                  style={{
                    width: 30,
                    height: 30,
                    border: "3px solid #FFFFFC",
                    borderRadius:5,
                    textAlign:"center",
                    
                    fontWeight:700
                  }}
                >
                  X
                </div></a>
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
                  marginBottom:20
                }}
              >
                <div className={styles.votesmenutitle}>Login In</div>
              </div>
              <div className={styles.textmin} style={{textAlign:"center"}}>Dont have an account?</div>
              <a href="/register" style={{color:"inherit"}}>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default index