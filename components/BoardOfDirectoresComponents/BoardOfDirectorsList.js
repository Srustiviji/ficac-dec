'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Modal, Button } from 'react-bootstrap';

const BoardOfDirectorsList = () => {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fetch('https://ficac.ivistaz.co/wp-json/wp/v2/directors?categories=10&per_page=100&_embed');
      const jsonData = await result.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
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
      <Container className=''>
        <Row className='d-flex flex-lg-row flex-column'>
          {data.map((items) => (
            <Col
              key={items.id}
              className='text-center d-flex flex-column align-self-stretch mt-lg-4 mt-3 p-2'
              lg={3}
            >
              <Col className='custom-class  shadow-sm rounded-3 p-2'>
                <Image src={items._embedded['wp:featuredmedia'][0].source_url} alt={items.title.rendered} fluid width={100} height={100} />
                <Col>
                  <h6 className='mt-3'>{items.acf.designation}</h6>
                  <p className='font12px mb-0'>{items.acf.name}</p>
                  <p className='font12px mb-0' style={{ height: '40px' }}>
                    {items.acf.honorary}
                  </p>
                </Col>
                <Col className=''>
                  <Button
                    className='rounded-2 py-1 px-4 px-lg-2 d-inline-block text-white font12px'
                    style={{ backgroundColor: "#001C79" }}
                    onClick={() => openPopup(items)}
                  >
                    Read more
                  </Button>
                </Col>
              </Col>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popup For All Read More */}
      <Modal
        show={showPopup}
        onHide={closePopup}
        className='text-white'
        
      >
        <div style={{ backgroundColor: "#810100" }} className='text-white'>
          <Modal.Header>
            <Col
              className="position-absolute top-0 end-0 p-3"
              onClick={closePopup}
            >
              <i
                className="bi bi-x-circle d-flex flex-row justify-content-end fs-4 text-white cursor-pointer"
              ></i>
            </Col>
            <Modal.Title>{selectedPost?.acf.designation}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div dangerouslySetInnerHTML={{ __html: selectedPost?.content.rendered }} />
            {/* Add more content here as needed */}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default BoardOfDirectorsList;