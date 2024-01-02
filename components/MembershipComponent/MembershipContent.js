import React from 'react'
import { Container , Col , Row } from 'react-bootstrap'
import Link from 'next/link'

const MembershipContent = () => {
  return (

        <Container fluid className='p-0'>
        <Container className='p-0'>
            <Col className='banner-text-container text-white'>
                <p>
                Membership
                <br /> 
                Procedure 2023
                </p>
                <h3 className='m-0'>
                FICAC Member  
                <br />
                Corps/Associations
                </h3>
            </Col>


            {/* content of application  */}
            <Col className='px-3 mt-4'>
            <h3 className='membershiph3'>Application And Membership Procedures</h3>
            <p>
            Summarized below are the procedures that a Consular Corps or Association or a Regional Association is asked to follow to become a Member of the FICAC aisbl, and the general procedres for remaining a Member Corps/Association or Regional Association of FICAC
            </p>
          
               
                <h4 className='membershippara'>Applications</h4>
          
            <p>
            The application procedure shows directly from article 4 of the Official Statutes of FICAC aisbl
            </p>
            <p>
            Article 4. Membership
            </p>
            <p>
            All Associations are eligible to become Members of the Federation, provided that their statutes are consistent with the Constitution of the Federation, and that they accept the Constitution of the Federation, subject to the confirmation of their membership by the General Assembly.
            </p>
            {/* <ul className='px-3 membershippara'>
                <li> */}
                <h4 className='membershippara'>Application Dossier</h4>
                {/* </li>
            </ul> */}
            <p>
            To apply to join FICAC as a member Corps/Association or Regional Association, the Organization is asked to send documents to:
            </p>
            </Col>
            {/* second part */}
            <Col className='px-3 '>
            <p className='p-0 m-0'>
            <b>FICAC aisbl</b>
            </p>
            <p className='p-0 m-0'>
            <b>Hon. Purrshottam Bhaggeria, Secretary General </b>
            </p> 
            <p><a 
            className='text-decoration-none' 
            href="mailto:secretary.general@ficacworld.org "
            >
                 Email: secretary.general@ficacworld.org
            </a></p>
            
            <p className='p-0 m-0'>
            <b>Secretary’s General Office</b>
            </p>
            
            
            <p className='p-0 m-0'>
            <b>Sunil Kunj (Mr) </b>
            </p>

            
            <p><a 
            className='text-decoration-none' 
            href="mailto:secretary.general.office@ficacworld.org "
            >
                Email: secretary.general.office@ficacworld.org 
            </a></p>
            {/* <p className='p-0 m-0'>
            Email: secretary.general.office@ficacworld.org 
            </p> */}
            <p className='p-0 m-0'>
            Tel.: +91-11-49502068 Mobile & WhatsApp: +91-9910566559 
            </p>

            <p className='p-0 m-0'>  
            Office: “Bhaggeria House”, 43 Community Centre, New Friends Colony, New Delhi-110025, India
            </p>
            </Col>
            {/* 3 section */}
         
         <Col className='px-3'>
         <p>
         The following documents:
         </p>
         <ul className='disc px-3'>
            <li>
            A letter requesting membership in FICAC (see model of Application letter) 
            </li>

            <li>
            A copy of the Corps’/Association’s or Regional Association’s Constitution, By-Laws and other Regulations 
            </li>
            <li>
            A copy of the Corps’/Associations or Regional Association’s Membership lists (with details of all members). Specification of the Executive Board is necessary.
            </li>
         </ul>
         </Col>

         {/* 4 section */}
         <Col className='px-3'>
         <h4 className='membershippara'>
         Application Procedure
         </h4>
         <p>
         The application documents are forwarded to the members of the FICAC Legal Committee, responsible for membership, for their review and subsequent recommendation to the Board of Directors. After approval, the Board of Directors may grant provisional membership to the new member, subject to confirmation by the General Assembly. </p>
         
         <p>The Board of Directors reviews the recommendation and submits the application with all recommendation to the FICAC aisbl General Assembly Meeting, which is usually held every 3 years in conjunction with the World Congress of Consuls. </p>
         
         <p>A yes vote means that the Corps/Association of Regional Association’s can become a Member of FICAC, once membership fees for the current year have been paid.
         </p>

         <h4 className='membershippara'>
         Information About The Application
         </h4>
         <p>
         The Secretary General of FICAC would normally acknowledge receipt of an application and subsequently informs the applying Organization about the decision of the Board of Directors for provisional membership and also about the decision of the General Assembly Meeting.
         </p>

         <h4 className='membershippara'>
         Application Form Membership 2023
         </h4>
         <p>
         If you wish to become a Member of FICAC aisbl, please complete the Application Form below.
         </p>

        <Link href="http://ficac.ivistaz.co/wp-content/uploads/2023/12/Application-Form-Membership-2019.pdf" target='_blank'>
         <div className='p-2 d-inline-block text-white fs-5 mb-4     ' style={{backgroundColor:"#001C79",}}>
         Download form
         </div>
         </Link>
         </Col>
        
            </Container>
            </Container>

    
  )
}

export default MembershipContent
