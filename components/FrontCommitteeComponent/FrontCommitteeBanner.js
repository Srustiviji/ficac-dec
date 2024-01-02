import React from 'react'
import { Container } from 'react-bootstrap'

const FrontCommitteeBanner = () => {

    const background = {
        backgroundImage:
            "url('/committees_banner.jpg')",
        height: "90vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width:"100%"
    }

  return (
    <Container fluid className='container-padding'>
   <Container fluid style={background} >
   </Container>
   </Container>
  )
}

export default FrontCommitteeBanner
