import React from 'react'
import { Container , Row , Col , Image} from 'react-bootstrap'

const HomeOrganisation = () => {
  return (
    <Container>
        <Row className='gap-1 py-3 pt-5'>
        <Col className='d-flex align-items-center'>
            <Image src="/prince_org.png"></Image>
            </Col>
            <Col className='d-flex align-items-center' >
            <Image src="/vocational_education.png"></Image>
            </Col>
            <Col className='d-flex align-items-center'>
            <Image src="/rasit_org.png"></Image>
            </Col>
            <Col className='d-flex align-items-center' >
            <Image src="/ascame.png"></Image>
            </Col>
            <Col className='d-flex align-items-center'>
            <Image src="/unicef_org.png"></Image>
            </Col>
            <Col className='d-flex align-items-center' >
            <Image src="/unic.png"></Image>
            </Col>
        </Row>
        <Row className=' py-3'>
            <Col className=' d-flex flex-row justify-content-center'>
        <h2 className=""style={{color:"#001C79" , size:"30px"}}>
        Recognition of the status of FICAC as NGO
        </h2>
          </Col>
        </Row>

        <Row className='d-flex flex-row justify-content-center pb-5'>
        <Col className='d-flex align-items-center gap-5 justify-content-center' >
            <Image src="/ficac_ngo.png"></Image>
       
            <Image src="/eco_soc.png"></Image>
         

            <Image src="/inter_legal.png"></Image>
            </Col>
        </Row>
    </Container>
  )
}

export default HomeOrganisation
