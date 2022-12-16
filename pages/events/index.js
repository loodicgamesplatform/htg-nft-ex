import React from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Card from "../../Components/Card";
import { Col, Container, Row } from "react-grid-system";
import BuyCard from "../../Components/BuyCard";
import { setConfiguration } from 'react-grid-system';
const index = () => {
  setConfiguration({  gridColumns: 20 });
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ overflow: "hidden" }}>
        <Header></Header>
        <div style={{ display: "flex" }}>
          <Menu></Menu>
          <div style={{width:"100%"}}>
            <Container>
            <Row>
              <Col sm={6} md={4} lg={5} xl={4} xxl={4}>
                <Card></Card>
              </Col>
              <Col sm={6} md={4} lg={5} xl={4} xxl={4}>
                <Card></Card>
              </Col>
              <Col sm={6}md={4} lg={5} xl={4} xxl={4}>
                <Card></Card>
              </Col>
              <Col sm={6} md={4} lg={5} xl={4} xxl={4}>
                <Card></Card>
              </Col>
              <Col sm={6} md={4}lg={5} xl={4} xxl={4}>
                <Card></Card>
              </Col>
              <Col sm={6} md={4} lg={5} xl={4} xxl={4}>
                <BuyCard></BuyCard>
              </Col>
              <Col sm={6} md={4} lg={5} xl={4} xxl={4}>
                <BuyCard></BuyCard>
              </Col>
            </Row></Container>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
