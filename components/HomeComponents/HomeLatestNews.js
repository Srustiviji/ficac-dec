'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';


import 'react-multi-carousel/lib/styles.css';

const HomeLatestNews = () => {

  const [isData, setIsData] = useState([]);

  const customDotListStyle = {
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '10px 20px',
  };

  const customDotStyle = {
    width: '10px',
    height: '10px',
    margin: '10px 10px',
    backgroundColor: '#810100',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      let result = await fetch('https://ficac.ivistaz.co/wp-json/wp/v2/posts?categories=11&_embed');
      result = await result.json();
      setIsData(result);
      console.log(result);
    } catch {
      console.log('Error fetching data');
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Add an empty dependency array to avoid infinite loop

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Container className=''>

        <Row className='p-4'>
          <h3 className='fs-1 d-flex justify-content-center' style={{ color: "#810100" }}>
            Latest News
          </h3>
        </Row>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          showArrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customDotListClass='custom-dot-list-style'
          customDotStyle={customDotStyle}
          customDotListStyle={customDotListStyle}

        >


          {isData.map((news) => (
            <div key={news.id}>


              <Row className='d-flex flex-lg-row flex-column m-2'>
                <Col
                  className='bg-white p-0'
                >
                  <Image
                    src={news.acf.latest_news_image}
                    alt={news.title.rendered}
                    width="100%"
                    fluid
                    className='d-lg-block d-none'
                    style={{ height: "350px" }}
                  />

                  <Image
                    src={news.acf.latest_news_image}
                    alt={news.title.rendered}
                    width="100%"
                    fluid
                    className='d-lg-none d-blocks'
                  />
                </Col>
                <Col
                  className='p-3' style={{ backgroundColor: "#001C79" }}>
                  <p dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                    className='text-white' />
                  <p
                    className='text-white'
                     dangerouslySetInnerHTML={{ __html: news.acf.excerpt }}></p>

                  <Link href={`/news/${news.slug}`} className='text-decoration-none text-lg-center'>
                    <p className='bg-white text-black p-2 d-inline-block rounded-2'>Read More</p>
                  </Link>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default HomeLatestNews;
