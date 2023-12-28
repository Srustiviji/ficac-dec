import React from 'react'
import { Container , Col , Row} from 'react-bootstrap'

const ContactUsContent = () => {
  return (
   <Container className='p-lg-5'>
    <Col className='banner-text-container text-white px-lg-5 '>
    <p className='mb-0'>
    Contact Us 
        </p>
    </Col>

    <Row className='py-5'>
        <Col className='col-5 d-lg-flex d-none'></Col>
    <Col className='px-3 py-2'>
    <h3>
    F.I.C.A.C. AISBL, Office of the President 
    </h3>
    <p>
    “World Federation of Consuls” Permanent Secretariat IT TOWER, 480 Avenue Louise, 1050 Brussels - BELGIUM E-mail: info@ficacworld.org 
    </p>
    </Col>
    </Row>
   
</Container>
  )
}

export default ContactUsContent
