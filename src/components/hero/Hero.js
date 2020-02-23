import React from 'react';
import Working from '../../assets/illustration-working.svg';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <HeroContainer>
            <Row>
                <Col xs={7}>
                    <Title>More than just shorter links</Title>
                    <Subtitle>Build your brand's recognition and get detailed insights on how your links are performing.</Subtitle>
                    <a href="#" className="button button--primary">Get Started</a>
                </Col>
                <Col xs={5}>
                    <img src={Working} alt="Illustration - working person"/>
                </Col>
            </Row>
        </HeroContainer>
    )
}

const Title = styled.h1`
    font-size: 4.8em;
    line-height: 1.17;
    margin-bottom: 0;
`;

const Subtitle = styled.h2`
    color: var(--neutral-gray);
    font-weight: 400;
    margin-top: 0;
    font-size: 1.5em;
`;

const HeroContainer = styled.div`
    padding: 5.5em .4em 4em;
    
    .button {
        margin-top: 20px;
        display: inline-block;
        padding: 1em 3.5em;
        border-radius: 25px;
        font-weight: 700;
        font-size: 1.3em;
        padding: 0.5em 1.8em;
    }
    
    img {
        margin: -20px 10px 0;
    }
`;