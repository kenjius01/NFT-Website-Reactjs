import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${(prop) => prop.theme.fontxxxl};
    color: ${(prop) => prop.theme.text};
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
`;

const Logo = () => {
    return (
        <LogoText>
            <Link to='/'>K.T</Link>
        </LogoText>
    );
};

export default Logo;
