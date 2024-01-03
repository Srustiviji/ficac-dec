import React from 'react'
import {  Col , Row ,} from 'react-bootstrap'
import { Container} from 'react-bootstrap'


const ContactUsContent = () => {
  return (
  
   <Container className='px-lg-5 m-0 p-0'>
    <Col className='banner-text-container text-white px-lg-5 '>
    <p className='mb-0'>
    Contact Us 
        </p>
    </Col>

    <Row className='py-5 px-lg-5 px-3'>
        <Col className='col-5 d-lg-flex d-none'></Col>
    <Col className='px-3 py-2 text-black'>
    <h3>
    FICAC AISBL, Office of the President 
    </h3>
    <p>
    “World Federation of Consuls” Permanent Secretariat IT TOWER, 480 Avenue Louise, 1050 Brussels - Belgium 
    <br />
    <p className=''><a href="mailto:info@ficacworld.org" className='text-decoration-none text-black'>E-mail: info@ficacworld.org</a></p>
      
    </p>
    </Col>
    </Row>
   
</Container>

  )
}

export default ContactUsContent
