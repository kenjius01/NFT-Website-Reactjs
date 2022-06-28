import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: inline-block;
    background-color: ${(prop) => prop.theme.text};
    color: ${(prop) => prop.theme.body};
    outline: none;
    border: none;
    font-size: ${(prop) => prop.theme.fontsm};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(0.9);
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${(prop) => prop.theme.text};
        border-radius: 50px;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.3s ease;
    }
    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`;

const Button = ({ text, link, target }) => {
    return (
        <a href={link} aria-label={text} target={target} rel='noreferrer'>
            <Btn>{text}</Btn>
        </a>
    );
};

export default Button;
