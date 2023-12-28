import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

const BoardOfDirectorsContent = () => {
  return (

      <Container className='p-0'>
            <Col className='banner-text-container text-white px-5 '>
            <p className='mb-0'>
            Board of  
            <br />
            Directors
                </p>
            </Col>

            <Row>
                <Col className='col-3 d-lg-flex d-none'></Col>
            <Col className='px-3 py-3'>
            <p>
            The Board of Directors is the governing body of FICAC to set strategy, oversee management, and protect the interests of FICAC Members. It is responsible for the execution of the decisions of the General Assembly and for the management and supervision of the affairs of the Federation. 
            </p>
            <p>
            The Board of Directors prepares and executes the work programs designed to promote the interests of the Federation. The present Board of Directors was elected for a 3-year term in Limassol Cyprus, on the 7th of November 2022 and consists of the following members:
            </p>
            </Col>
            </Row>
           
      </Container>
    
  )
}

export default BoardOfDirectorsContent
