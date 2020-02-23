import React from 'react';
import DesktopBackground from '../../assets/bg-shorten-desktop.svg';
import MobileBackground from '../../assets/bg-shorten-mobile.svg';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <ShortenLinkContainer>
            <Form>
                <Input type="text" placeholder="Shorten a link here..."/>
                <Button type="submit">Shorten It!</Button>
            </Form>
        </ShortenLinkContainer>
    )
}

const ShortenLinkContainer = styled.div`
    background-image: url(${DesktopBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #3A3053;
    border-radius: 10px;
    padding: 50px 40px;

    @media screen and (max-width: 768px) {
        background-image: url(${MobileBackground});
        background-position: 100px -70px;
    } 
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    border: 0;
    padding: 25px 20px;
    display: flex;
    flex: 1;
    border-radius: 10px;
`;

const Button = styled.button`
    border-radius: 10px;
    border: 0;
    background: #2BD1D1;
    color: #fff;
    padding: 23px 20px;
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
`;