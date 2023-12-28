import React from 'react'
import { Container } from 'react-bootstrap'

const NewsBanner = () => {
    const background = {
        backgroundImage:
            "url('/news_banner.png')",
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

export default NewsBanner
