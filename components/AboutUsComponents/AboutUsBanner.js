import React from 'react'
import { Container,Row , Col ,Image} from 'react-bootstrap'

const AboutUsBanner = () => {
const background = {
    backgroundImage:
        "url('/about_us_banner.png')",
    height: "90vh",
    // marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%"

};
  return (
   <Container fluid className='container-padding'>
   <Container fluid style={background} >
   </Container>
   </Container>
 
  )
}

export default AboutUsBanner
