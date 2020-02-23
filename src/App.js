import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ShortenLink from "./components/shorten-link/ShortenLink";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container style={{height: 12000+'px'}}>
        <Row>
            <Col xs={12}>
                <Header/>
                <Hero/>
                <ShortenLink/>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
