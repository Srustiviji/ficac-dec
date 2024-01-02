import React from 'react'
import { Container } from 'react-bootstrap'

const HistoryBanner = () => {

    const background = {
        backgroundImage:
            "url('/boardof_directors_banner.png')",
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

export default HistoryBanner
