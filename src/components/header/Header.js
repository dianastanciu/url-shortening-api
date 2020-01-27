import React from 'react';
import Logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Shortly logo"/>
            <NavUrls>
                <NavLinks>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </NavLinks>
                <NavLogin>
                    <li><a href="#">Login</a></li>
                    <li><a href="#" className="button button--primary">Sign Up</a></li>
                </NavLogin>
            </NavUrls>

            <NavBurger>
                <FontAwesomeIcon icon={faBars} className="burger-icon"></FontAwesomeIcon>
            </NavBurger>
        </HeaderContainer>
    )
}

const NavUrls = styled.div`
    flex: 1;
    display: flex;
       
    @media screen and (max-width: 767px) {
          flex-direction: column;
          background: var(--primary-dark-violet);
          position: absolute;
          top: 130%;
          left: auto;
          width: 95%;
          border-radius: 10px;
          font-size: 1.3em;
          padding-top: 20px;
     }
`;

const NavBurger = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
    
    .burger-icon {
        color: var(--neutral-gray);
        font-size: 1.7em;
        margin-top: 4px;
        margin-right: 6px;
    }
`;

const HeaderContainer = styled.header`
    padding-top: 42px;
    padding-left: 9px;
    display: flex;
    justify-content: space-between;
    position: relative;
    
    img {
        object-fit: contain;
    }
    
     @media screen and (max-width: 767px) {
            padding-top: 35px;
            padding-left: 6px;
     }
`;

const NavLinks = styled.ul`
    list-style-type: none;
    padding-left: 47px;
    margin-top: 14px;
    display: flex;
    flex: 1;
    
    a {
        font-weight: 700;
        font-size: .92em;
        padding-right: 32px;
        color: var(--neutral-gray);
    }
    
     @media screen and (max-width: 767px) {
         display: flex;
         flex-direction: column;
         align-items: center;
         
         li {
            padding-bottom: 25px;
            margin-left: -8px;
         }
         
         a {
            font-size: .85em;
         }
     }
`;
const NavLogin = styled.ul`
    list-style-type: none;
    padding: 0;  
    margin-top: 14px;
    display: flex;
    
    a:not(.button) {
        margin-right: 32px;
        color: var(--neutral-gray);
        font-weight: 700;
        font-size: 0.94em;
        padding-right: 7px;
    }
    
    @media screen and (max-width: 767px) {
         flex-direction: column;
         align-items: center;
         
         li {
            margin: -4px 0;
            padding-bottom: 20px;
            margin-left: 10px;
            margin-bottom: 10px;
            width: 100%;
            text-align: center;
         }
         
         a:not(.button) {
            margin: 0;
            font-size: .85em;
        }
        
        a.button {
            display: block;
            width: 85%;
            margin: -5px auto 0;
        }
    }
`;