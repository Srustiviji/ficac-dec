'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';

const HomeUpcomingEvents = () => {
  const [isData, setIsData] = useState([]);

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      let result = await fetch(
        "https://ficac.ivistaz.co/wp-json/wp/v2/posts?categories=14&_embed"
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



      <Container className="pt-0 pb-0 pt-0">
        <Row className='pb-0'>
          <h3
            className="fs-1 d-flex justify-content-center pb-0"
            style={{ color: "#810100" }}
          >
            Upcoming Events
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

                <Col>
                  <Col>
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post.title.rendered}
                      fluid
                    />
                  </Col>
                  <Col className="">
                    <p
                      className="font14px mb-0 px-3"
                      style={{ height: "150px" }}
                    >
                      {post.acf.excerpt}
                    </p>
                  </Col>

                </Col>
              </Row>
            </div>
          ))}

        </Carousel>
      </Container>

    </>
  )
}

export default HomeUpcomingEvents
