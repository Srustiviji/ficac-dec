import React from 'react'
import { Container } from 'react-bootstrap'


const HomeBanner = () => {
   
        const background = {
            backgroundImage:
                "url('/home_banner.png')",
            height: "90vh",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:"100%",
            backgroundPosition:"center center"
            
          
        }

  return (

    <Container fluid className='container-padding'>
    <Container fluid style={background} >
    </Container>
    </Container>
  )
}


export default HomeBanner
