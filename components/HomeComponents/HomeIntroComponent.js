import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'

const HomeIntroComponent = () => {
  return (
    <>
    <Container>
      <Row className='d-lg-row'>
        <Col className=' col-lg-4 col-12 d-flex justify-content-end ms-lg-4'>
         <Image src="/intro_about_ficac.png" alt="aboutus" fluid  style={{ marginTop:"-30px"}}/>
        </Col>
        <Col className='p-5'>
         <h2>
         Intro about FICAC
         </h2>
         <p>
         FICAC (Federation Internationale des Corps et Associations Consulaires AISBL), is also known as the World Federation of Consuls. The Federation is a non-profit organization and it abstains from all religious or political activities and from the practice of any discrimination on grounds of race, sex, colour, religion or such other grounds as enumerated in relevant international human rights treaties. FICAC has been recognized as an NGO with the United Nations in 1993, initially with ROSTERECOSOC status upgraded in August 2018 to SPECIAL ECOSOC Status. It is also recognized as an NGO by the Organization of American States (OAS) and by the European Union (EU).
         </p>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default HomeIntroComponent