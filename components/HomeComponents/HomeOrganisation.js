import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const HomeOrganisation = () => {
  return (
    <Container className=''>
      <Row className='gap-lg-1 gap-3 py-3 pt-5 d-flex flex-column flex-lg-row justify-content-center flex-wrap'>
       
        <Col className='d-flex align-items-center justify-content-center'>
          <Image src="/prince_org.png" alt=''/>
        </Col>
      
      
        <Col className='d-flex align-items-center justify-content-center ' >
          <Image src="/vocational_education.png" alt=''/>
        </Col>
       
        <Col className='d-flex align-items-center justify-content-center '>
          <Image src="/rasit_org.png" alt=''/>
        </Col>
        
        <Col className='d-flex align-items-center justify-content-center ' >
          <Image src="/ascame.png" alt=''/>
        </Col>
      
        <Col className='d-flex align-items-center justify-content-center '>
          <Image src="/unicef_org.png" alt=''/>
        </Col>
       
        <Col className='d-flex align-items-center justify-content-center ' >
          <Image src="/unic.png" alt=''/>
        </Col>
      
      </Row>

      
      <Row className=' py-3'>
        <Col className=' d-flex flex-row justify-content-center align-items-center'>
          <h2 className="" style={{ color: "#001C79", size: "30px" }}>
            Recognition of the status of FICAC as an NGO
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
