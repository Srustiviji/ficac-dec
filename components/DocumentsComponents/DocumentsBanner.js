import React from 'react'
import { Container } from 'react-bootstrap'

const DocumentsBanner = () => {
    const background = {
        backgroundImage:
            "url('/documents_banner.png')",
        height: "100vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

  return (
    <Container fluid>
       <Container style={background} >

</Container>
    </Container>
    
  )
}

export default DocumentsBanner
