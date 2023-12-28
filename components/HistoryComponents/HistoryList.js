"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HistoryList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      // let result = await fetch('https://ficac.ivistaz.co/wp-json/wp/v2/directors?categories=10&per_page=100&_embed');
      let result = await fetch(
        "https://ficac.ivistaz.co/wp-json/wp/v2/history?_embed&per_page=20"
      );

      result = await result.json();
      setData(result);
      console.log(result);
    } catch {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Container>
      <Row className="d-flex flex-lg-row flex-column mb-4">
        {data.map((post) => (
          <Col
            key={post.id}
            className="text-center d-flex flex-column align-self-stretch mt-lg-4 mt-3"
            lg={4}
          >
            <Col className="custom-class">
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                fluid
                width={250}
                height={250}
              />
              <Col>
                <h6 className=" mt-3 mb-lg-3"
                >
                  <div className="px-lg-5 "
                style={{height: '25px'}}

                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </h6>
                <p className="font20px mb-0">{post.acf.year}</p>
              </Col>
            </Col>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HistoryList;
