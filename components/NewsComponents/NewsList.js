'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';


const NewsList = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          let result = await fetch('https://ficac.ivistaz.co/wp-json/wp/v2/posts?categories=1&_embed&per_page=100');
          console.log('Fetched result:', result);
          
          if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
          }
      
          result = await result.json();
          console.log('Fetched data:', result);
      
          setData(result);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
      

    useEffect(() => {
        fetchData();
    })

  return (
    <Container fluid>

    <Container className='d-flex justify-content-center'>
    

    <Row className='d-flex flex-lg-row flex-column mb-4 gap-5 ms-lg-5' >
    {data.map((post) => (
        <Col key={post.id}
         className='text-center d-flex flex-column align-self-stretch mt-lg-4 mt-3 shadow p-0 mb-5 bg-white rounded' 
         style={{height:"600px", width:"300px"}}
         lg={4}
         >
            <Col className='custom-class'>
            <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} fluid  width={300} height={390}/>
                 <Col>
                 <h6
                    className=' mt-3'
                >
                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                style={{height:"130px", fontSize:"22px" , color:"#001C79"}} 
                className='px-3'
                />
                </h6>
                 <p
                className='font12px mb-0 px-3'
                style={{height:"120px", color:"#001C79"}}
                 
                 dangerouslySetInnerHTML={{ __html: post.acf.excerpt }} >
                
                </p>
                 </Col>
                <Col className='mt-lg-3'>
                <Link href={`/news/${post.slug}`} target='_blank' >
                <p 
                className='rounded-2 py-2 px-4 px-lg-2 d-inline-block text-white' style={{backgroundColor:"#001C79"}}
                >
                 Read more
                </p>
                </Link>
                </Col>
            </Col>
         </Col>

                ))}
    </Row>
    </Container>
    </Container>
    
  )
}

export default NewsList
