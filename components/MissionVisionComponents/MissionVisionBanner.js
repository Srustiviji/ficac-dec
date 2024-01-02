import React from 'react'
import { Container } from 'react-bootstrap'

const MissionVisionBanner = () => {
    const background = {
        backgroundImage:
            "url('/mission_vision.png')",
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

export default MissionVisionBanner
