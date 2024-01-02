import React from 'react'
import { Container } from 'react-bootstrap'

const FrontCommitteeBanner = () => {

    const background = {
        backgroundImage:
            "url('/committees_banner.jpg')",
        height: "100vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

  return (
    <Container fluid  style={background}>
    </Container>
  )
}

export default FrontCommitteeBanner
