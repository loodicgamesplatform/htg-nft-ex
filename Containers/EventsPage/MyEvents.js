import React from 'react'
import { Col, Container, Row, setConfiguration } from 'react-grid-system'
import BuyCard from '../../Components/BuyCard'
import Card from '../../Components/Card'

const MyEvents = () => {
  setConfiguration({  gridColumns: 20 });
  return (
    <div style={{width:"100%"}}>
    <Container>
    <Row>
      <Col xs={20} sm={10} md={5} lg={5} xl={4} xxl={4}>
        <Card></Card>
      </Col>
      <Col xs={20} sm={10} md={5} lg={5} xl={4} xxl={4}>
        <Card></Card>
      </Col>
      <Col xs={20} sm={10}md={5} lg={5} xl={4} xxl={4}>
        <Card></Card>
      </Col>
      <Col xs={20} sm={10} md={5} lg={5} xl={4} xxl={4}>
        <Card></Card>
      </Col>
      <Col xs={20} sm={10} md={5}lg={5} xl={4} xxl={4}>
        <Card></Card>
      </Col>
      <Col xs={20} sm={10} md={5} lg={5} xl={4} xxl={4}>
        <BuyCard></BuyCard>
      </Col>
      <Col xs={20} sm={10} md={5} lg={5} xl={4} xxl={4}>
        <BuyCard></BuyCard>
      </Col>
    </Row></Container>
  </div>
  )
}

export default MyEvents