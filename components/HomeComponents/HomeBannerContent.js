import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'


const HomeBannerContent = () => {
  return (
    <Container fluid className='p-0'>
    <Container className='p-0'>
        <Col className='banner-text-container text-white'>
        <p className='mb-0'>
        Bridging the World 
        </p>
        <p className='pt-2 d-lg-flex d-none'
        style={{fontSize:"18px", fontWeight:"lighter" , lineHeight:"27px" , wordWrap:"initial"}}
        >
            FICAC, a global network of Consular Associations was created to support and <br />improve the status, legitimacy, and effectiveness of all consular officers in all <br /> receiving States.
            
            <br />
             Its aims are to promote and strengthen mutual understanding between<br /> Honorary Consuls and Career Consuls worldwide; develop a framework and basis <br /> for exchange of current information, ideas and suggestions regarding matters <br /> related to the office of Honorary Consuls and Career Consuls; promote at national <br /> level and international for a better understanding of duties and responsibilities.
        </p>

        <p className='pt-2 d-flex d-lg-none'
        style={{fontSize:"18px", fontWeight:"lighter" , lineHeight:"27px" , wordWrap:"initial"}}
        >
          FICAC, a global network of Consular Associations was created to support and improve the status, legitimacy, and effectiveness of all consular officers in all receiving States.<br /> Its aims are to promote and strengthen mutual understanding between Honorary Consuls and Career Consuls worldwide; develop a framework and basis for exchange of current information, ideas and suggestions regarding matters related to the office of Honorary Consuls and Career Consuls; promote at national level and international for a better understanding of duties and responsibilities.
        </p>
           </Col>
        </Container>
</Container>
  )
}

export default HomeBannerContent
