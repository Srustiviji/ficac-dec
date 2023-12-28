import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const HomeOrganisation = () => {
  return (
    <Container>
      <Row className='gap-1 py-3 pt-5'>
        <Col className='d-flex align-items-center'>
          <Image src="/prince_org.png" alt=''/>
        </Col>
        <Col className='d-flex align-items-center' >
          <Image src="/vocational_education.png" alt=''/>
        </Col>
        <Col className='d-flex align-items-center'>
          <Image src="/rasit_org.png" alt=''/>
        </Col>
        <Col className='d-flex align-items-center' >
          <Image src="/ascame.png" alt=''/>
        </Col>
        <Col className='d-flex align-items-center'>
          <Image src="/unicef_org.png" alt=''/>
        </Col>
        <Col className='d-flex align-items-center' >
          <Image src="/unic.png" alt=''/>
        </Col>
      </Row>
      <Row className=' py-3'>
        <Col className=' d-flex flex-row justify-content-center'>
          <h2 className="" style={{ color: "#001C79", size: "30px" }}>
            Recognition of the status of FICAC as NGO
          </h2>
        </Col>
      </Row>

      <Row className='d-flex flex-row justify-content-center pb-5'>
        <Col className='d-flex align-items-center gap-5 justify-content-center' >
          <Image src="/ficac_ngo.png" alt=''/>

          <Image src="/eco_soc.png" alt=''/>


          <Image src="/inter_legal.png" alt=''/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeOrganisation
