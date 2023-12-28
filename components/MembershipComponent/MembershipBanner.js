import React from 'react'
import { Container } from 'react-bootstrap'

const MembershipBanner = () => {
    const background = {
        backgroundImage:
            "url('/membership.png')",
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

export default MembershipBanner
