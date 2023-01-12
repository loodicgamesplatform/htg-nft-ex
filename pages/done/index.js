import React from "react";
import { Col, Container, Row } from "react-grid-system";
import Link from 'next/link'

import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import styles from "../../styles/Home.module.css";
const index = () => {
  return (
    <div className={styles.container} style={{ height: "100vh", width: "100%" }}>
    <Container>
      <Row>
        <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div
          className={styles.purplebig}
            style={{
              height: 600,
              width: "100%",
              backgroundColor: "#FECE00",
              borderRadius: 10,
              marginTop: 135,
              textAlign:"center"
            }}
          >
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
              <a style={{color:"inherit"}}>
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
              </div></a></Link>
            </div>
            <div className={styles.textbig}>CONGRATS!</div>
            <div className={styles.yellowmin}>You started your journey to become a prestigious member of Sticky community.</div>
            <div className={styles.textbig}>CONFIRMATION EMAIL SENT!</div>
            <div className={styles.yellowmin}>We have sent an email to xxx@xxx.com, please check your inbox and spam folder.</div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default index