'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../../app/globals.css'

const HomeLatestHighlights = () => {
  const [isData, setIsData] = useState([]);

  const fetchPosts = async () => {
    try {
      const result = await fetch('https://ficac.ivistaz.co/wp-json/wp/v2/posts?categories=12&per_page=100&_embed');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setIsData(postsData);  // Corrected this line
      // console.log(postsData);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Container className=' pb-5 p-0'>
        <Row className='pt-4 p-0 m-0'>
          <h3 className='fs-1 d-flex justify-content-center mb-lg-5 m-0 p-0' style={{ color: "#810100" }}>
            Latest Highlights
          </h3>
        </Row>
        <Row className='p-0 m-0'>
          {isData.map((post) => (
            <Row key={post.id} 
            className='mt-5 p-0 m-0'>
              <Col className='d-flex mt-4 p-0' lg={5}>
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  // fluid
                  className='latest-heighliht-img-home'
                  height="350px"
                  width="100%"
                />
              </Col>
              <Col className='mt-lg-5' >
                <Row className='p-lg-5 p-4' style={{ backgroundColor: "#810100", zIndex: "0" }}>
                  <h3 className='text-white ms-lg-5'
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                  <p 
                  className='text-white ms-lg-5'
                  >
                    {post.acf.excerpt}
                  </p>
                </Row>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeLatestHighlights;
