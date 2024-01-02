import React from 'react'
import { Container } from 'react-bootstrap'

const MissionVisionBanner = () => {
    const background = {
        backgroundImage:
            "url('/mission_vision.png')",
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

export default MissionVisionBanner
