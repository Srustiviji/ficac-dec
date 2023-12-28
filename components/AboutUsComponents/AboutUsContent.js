import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUsContent = () => {
  return (
    <Container fluid  className="p-0">
      <Container  className="p-0">
        {/* spanbox banner */}

        <Col className="banner-text-container text-white">
          <p className="mb-0">
            FICAC Is There
            <br />
            to Serve Consuls
            <br />
            All over the World
          </p>
        </Col>

        {/* content */}
        <Row className="py-4">
          <Col className="d-flex  justify-content-center justify-content-lg-end align-content-lg-end py-lg-4" lg={3}>
            <Image src="/about_us_image.png" alt="aboutus" fluid />
          </Col>
          <Col>
          <Row className="py-4 px-5">
            <p>
              FICAC was established in Copenhagen in October 1982. It was born
              of the necessity to bring together Consular Associations or Corps
              from all over the world and to share experience, and co-ordinate
              efforts to enhance the status and effectiveness of the Consul, the
              oldest institution serving International bilateral relations.
            </p>

            <p>
              {" "}
              FICAC is a global network of Consular Associations created to
              support and improve the status, legitimacy and effectiveness of
              all consular officers in all receiving States.
            </p>

            <p className="mb-0">
              {" "}
              FICAC’s aims are to promote and strengthen mutual understanding
              between Honorary Consuls and Career Consuls worldwide; develop a
              framework and basis for exchange of current information, ideas and
              suggestions regarding matters related to the office of Honorary
              Consuls and Career Consuls; promote at national level and
              international for a better understanding of duties and
              responsibilities, rights and privileges of Honorary Consuls and
              Career Consuls.
            </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUsContent;
