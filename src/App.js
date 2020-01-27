import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
          <Col xs={12}>
              <Header/>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
