
import React from 'react'
import { Container } from 'react-bootstrap'

const ContactUsBanner = () => {
  const background = {
    backgroundImage:
        "url('/contactus_banner.png')",
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

export default ContactUsBanner
