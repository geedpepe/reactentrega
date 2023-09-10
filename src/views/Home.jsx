import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {
  return (
    <>
      <Container>
        <h1>Tienda Muebles Uruguay</h1>
        <Row>
          <Col md={4}>
            <p>En nuestra tienda, encontrarás una amplia selección de muebles de alta calidad para dar vida a tu hogar. Desde elegantes sofás y cómodas camas hasta mesas de centro únicas y hermosos armarios, tenemos todo lo que necesitas para crear el espacio de tus sueños.</p>
          </Col>
          <Col md={4}>
            <p>Nuestros muebles están diseñados pensando en la comodidad, la funcionalidad y el estilo. Trabajamos con artesanos talentosos y utilizamos materiales duraderos para garantizar que cada pieza sea una inversión que perdure en el tiempo.</p>
          </Col>
          <Col md={4}>
            <p>Ya sea que estés buscando renovar tu sala de estar, darle un toque especial a tu dormitorio o mejorar tu espacio de trabajo, estamos aquí para ayudarte a encontrar la pieza perfecta. Ven a visitarnos y descubre cómo podemos hacer que tu hogar sea aún más acogedor y hermoso.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;

