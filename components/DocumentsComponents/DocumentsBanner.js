import React from 'react'
import { Container } from 'react-bootstrap'

const DocumentsBanner = () => {
    const background = {
        backgroundImage:
            "url('/documents_banner.png')",
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

export default DocumentsBanner
