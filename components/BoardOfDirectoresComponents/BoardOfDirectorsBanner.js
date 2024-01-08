import React from 'react'
import { Container } from 'react-bootstrap'

const HistoryBanner = () => {

    const background = {
        backgroundImage:
            "url('/board_of_directors.jpg')",
        height: "75vh",
        fontSize: "50px",
        backgroundSize: "contain",
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

export default HistoryBanner
