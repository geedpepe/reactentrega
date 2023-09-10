import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Pricing() {
  return (
    <>
      <Container>
        <h1>Galeria de Imágenes</h1>
        <Row>
          <Col md={4}>
            <Image src="url_to_image_1" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="url_to_image_2" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="url_to_image_3" thumbnail />
          </Col>
          {/* Add more images as needed */}
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
