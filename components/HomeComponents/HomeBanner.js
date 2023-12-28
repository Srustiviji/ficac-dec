import React from 'react'
import { Container } from 'react-bootstrap'


const HomeBanner = () => {
   
        const background = {
            backgroundImage:
                "url('/home_banner.png')",
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


export default HomeBanner
