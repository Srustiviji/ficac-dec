'use client'
import React, { useState, useEffect } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'




const Post = ({ slug }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/events_gallery?slug=${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  },);

  //console.log('Fetched data:', data);


  if (!data || !Array.isArray(data)) {
    return <p>Please wait..</p>;
  }

  return (
    <>
      <Container>
        <div>
          {/* {slug} */}
          <Row>
            {data.map((post) => (
              <>
                <Col
                  className="pt-5 mb-4"
                >
                  <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered}}>
</h1>
                  <hr className="h-line"
                  style={{color:"#810400"}} />
                  <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                    {post.acf.photo_gallery.events_photos[0].map((photo, index) => (

                      <Col
                        key={photo.id}
                        md={3}
                      >
                        {/* Desktop View */}
                        <Col
                          className='p-0 d-lg-block d-none'
                          style={{
                            marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`, // Adjust the margin-top as needed
                            marginLeft: `${index % 4 === 0 ? 0 : -50}px`, // 0 for the first, 30 for the rest
                          }}
                        >
                          <Image src={photo.full_image_url} alt="" width="100%" height={212} />
                        </Col>

                        
                        {/* Mobile View */}

                        <Col
                          className='p-0 d-lg-none d-block mt-3'
                        >
                          <Image src={photo.full_image_url} alt="" width="100%" />
                        </Col>

                      </Col>
                    ))}
                  </Row>
                </Col>
              </>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Post;


{/* <Container>
<Row>
  <Col lg={9}>
    <p className="thin h-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

  </Col>
  <Col>

  </Col>
</Row>
</Container> */}