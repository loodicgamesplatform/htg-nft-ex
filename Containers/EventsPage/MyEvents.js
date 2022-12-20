import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import BuyCard from '../../Components/BuyCard'
import Card from '../../Components/Card'

const MyEvents = () => {
  return (
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
  )
}

export default MyEvents