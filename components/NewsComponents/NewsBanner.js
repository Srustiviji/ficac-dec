import React from 'react'
import { Container } from 'react-bootstrap'

const NewsBanner = () => {
    const background = {
        backgroundImage:
            "url('/news_banner.png')",
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

export default NewsBanner
