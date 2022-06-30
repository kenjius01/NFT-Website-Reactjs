import React from 'react';
import styled from 'styled-components';

import img9 from '../assets/Nfts/bighead-9.svg';
import img10 from '../assets/Nfts/bighead-10.svg';
import img11 from '../assets/Nfts/bighead-11.svg';
import img12 from '../assets/Nfts/bighead-12.svg';
import img13 from '../assets/Nfts/bighead-13.svg';
import img14 from '../assets/Nfts/bighead-14.svg';

const Section = styled.section`
    width: 100vw;
    height: 25rem;
    position: relative;
    border-top: 2px solid ${(prop) => prop.theme.text};
    border-top: 2px solid ${(prop) => prop.theme.text};

    background-color: ${(prop) => `rgba(${prop.theme.textRgba}, 0.9)`};
    display: flex;
    justify-content: space-around;
    align-items: center;

    overflow: hidden;
`;

const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 25%;

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;

    img {
        width: 15rem;
        height: auto;
    }
`;

const Title = styled.h1`
    font-size: ${(prop) => prop.theme.fontxxxl};
    color: ${(prop) => prop.theme.body};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
    text-transform: capitalize;
`;

const JoinNow = styled.button`
    display: inline-block;
    background-color: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    outline: none;
    text-transform: capitalize;
    border: none;
    font-size: ${(prop) => prop.theme.fontlg};
    font-weight: bold;
    padding: 1.5rem 3rem;
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
        border: 2px solid ${(prop) => prop.theme.body};
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

const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                <img src={img10} alt='Nfts' />
                <img src={img11} alt='Nfts' />
                <img src={img9} alt='Nfts' />
                <img src={img14} alt='Nfts' />
                <img src={img12} alt='Nfts' />
                <img src={img13} alt='Nfts' />
            </ImgContainer>
            <Title>
                Join the <br /> weirdos club
            </Title>

            <JoinNow>join now</JoinNow>
        </Section>
    );
};

export default Banner;
