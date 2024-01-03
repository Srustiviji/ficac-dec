'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';

const BoardOfHonoraryList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const fetchPosts = async () => {
    try {
      const result = await fetch('https://ficac.ivistaz.co/wp-json/wp/v2/directors?categories=9&per_page=100&_embed');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openPopup = (post) => {
    setSelectedPost(post);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedPost(null);
    setShowPopup(false);
  };

  return (
    <>
      <Container>
        <div>
          <h3 className='membershiph3 mt-5 mb-0' style={{ fontSize: '30px' }}>
            <b>Honorary Members of the Board of Directors</b>
          </h3>
        </div>

        <Row className='d-flex flex-lg-row flex-column mb-4'>
          {posts.map((post) => (
            <Col
              key={post.id}
              className='text-center d-flex flex-column align-self-stretch mt-lg-4 mt-3'
              lg={3}
            >
            <Col className='custom-class  shadow-sm rounded-3 p-2'>
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  fluid
                  width={100}
                  height={100}
                />
                <Col>
                  <h6 className='mt-3'>{post.acf.designation}</h6>
                  <p className='font12px mb-0'>{post.acf.name}</p>
                  <p className='font12px mb-0' style={{ height: '40px' }}>
                    {post.acf.honorary}
                  </p>
                </Col>
                <Col className='mt-lg-3'>
                  <Button
                   className='rounded-2 py-1 px-1 px-lg-2 d-inline-block text-white font12px'
                    style={{ backgroundColor: '#001C79' }}
                    onClick={() => openPopup(post)}
                  >
                    Read more
                  </Button>
                </Col>
              </Col>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popup */}
      <Modal
        show={showPopup}
        onHide={closePopup}
        className='text-white align-items-center'
      >
        <div style={{ backgroundColor: "#810100" }} className='text-white'>
          <Modal.Header>

            <Col
              className="position-absolute top-0 end-0 p-3"
              onClick={closePopup}
            >
              <i
                class="bi bi-x-circle d-flex flex-row justify-content-end fs-4 text-white cursor-pointer"
              ></i>
            </Col>
            <Modal.Title>{selectedPost?.acf.designation}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedPost?.acf.name}</p>
            <p>{selectedPost?.acf.honorary}</p>
            <div dangerouslySetInnerHTML={{ __html: selectedPost?.content.rendered }} />

            {/* Add more content here as needed */}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default BoardOfHonoraryList;
