import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function Hero() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <div className='hero'>
      <Container>
        <Row >
          <Col sm={12} md={6} lg={6} xl={6} className='hero_text'>
            <h1>Studio Ghibli</h1>
            <p>Cofundado por Hayao Miyazaki, o Studio Ghibli é famoso por suas produções fascinantes.</p>
            <button className='hero_btn' onClick={() => scrollToComponent('films')} >Veja mais</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
