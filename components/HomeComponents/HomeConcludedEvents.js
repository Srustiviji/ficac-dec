"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Link from "next/link";

const HomeConcludedEvents = () => {
  const [isData, setIsData] = useState([]);

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      let result = await fetch(
        "https://ficac.ivistaz.co/wp-json/wp/v2/posts?categories=13&_embed"
      );
      result = await result.json();
      setIsData(result);
      console.log(result);
    } catch {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <Container fluid style={{backgroundColor:"#E4E8F5"}}>
     
   
      <Container className="py-3 pt-5">
        <Row>
          <h3
            className="fs-1 d-flex justify-content-center"
            style={{ color: "#001C79" }}
          >
            Concluded Events
          </h3>
        </Row>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          showArrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {isData.map((post) => (
            <div
              key={post.id}
              lg={4}
            >
              <Row
              className="text-center d-flex flex-column justify-content-center align-self-stretch mt-lg-4 mt-3 m-3 mb-5 bg-white p-0"
              >

              <Col className="p-0 m-0">
              
                <Col className="p-0 m-0">
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  fluid
                  width={320}
                  height={390}
                />
                </Col>
                <Col className="">
                  <h6 className=" mt-3">
                    <div
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      style={{
                        height: "40px",
                        fontSize: "22px",
                        color: "#810100",
                      }}
                      className="px-3"
                    />
                  </h6>
                  <p
                    className="font12px mb-0 px-3"
                    style={{ height: "150px" }}
                  >
                    {post.acf.excerpt}
                  </p>
                </Col>
                <Col className="mt-lg-3">
                  {/* <Link > */}
                  <p
                    className="rounded-2 py-2 px-4 px-lg-2 d-inline-block text-white"
                    style={{ backgroundColor: "#001C79" }}
                  >
                    Read more
                  </p>
                  {/* </Link> */}
                </Col>
              
              </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </Container>
      </Container>
    </>
  );
};

export default HomeConcludedEvents;
