import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img10 from '../../assets/Nfts/bighead-10.svg';
import img14 from '../../assets/Nfts/bighead-14.svg';
import img15 from '../../assets/Nfts/bighead-15.svg';
import img16 from '../../assets/Nfts/bighead-16.svg';
import Confetti from '../Confetti';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(prop) => prop.theme.body};
    position: relative;
`;
const Title = styled.h1`
    font-size: ${(prop) => prop.theme.fontxxl};
    text-transform: capitalize;
    color: ${(prop) => prop.theme.text};
    text-align: center;
    margin: 1rem auto;
    border-bottom: 3px solid ${(prop) => prop.theme.text};
    width: fit-content;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 64em) {
        width: 80%;
    }

    @media (max-width: 48em) {
        width: 90%;
    }
`;

const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0;
    color: ${(prop) => prop.theme.body};
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;

    backdrop-filter: blur(4px);

    border: 2px solid ${(prop) => prop.theme.text};
    border-radius: 20px;

    &:hover {
        img {
            transform: translateY(-2rem) scale(1.2);
        }
    }
`;

const ImgContainer = styled.div`
    width: 90%;
    margin-left: 0.8rem;
    background-color: ${(prop) => prop.theme.carouselColor};
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid ${(prop) => prop.theme.text};

    img {
        width: 100%;
        height: auto;
        transition: all 0.3s linear;
    }
`;

const Name = styled.h1`
    font-size: ${(prop) => prop.theme.fontlg};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(prop) => prop.theme.text};
    margin-top: 1rem;
`;
const Position = styled.h2`
    font-size: ${(prop) => prop.theme.fontmd};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${(prop) => `rgba(${prop.theme.textRgba}, 0.9)`};
    font-weight: 400;
`;

const MemberComponent = ({ img, name = 'none', position = 'none' }) => {
    return (
        <Item>
            <ImgContainer>
                <img src={img} alt={name} />
            </ImgContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    );
};

const Team = () => {
    return (
        <Section id='team'>
            <Confetti />
            <Title>team</Title>
            <Container>
                <MemberComponent
                    img={img16}
                    name='MEGNUM'
                    position='co-founder'
                />
                <MemberComponent
                    img={img15}
                    name='asuka tery'
                    position='Social Media Manager'
                />
                <MemberComponent img={img14} name='KT' position='Founder' />
                <MemberComponent img={img9} name='Layla' position='Manager' />
                <MemberComponent
                    img={img3}
                    name='CYBER PUNK'
                    position='blockchain specialist'
                />
                <MemberComponent
                    img={img5}
                    name='Kelvin'
                    position='graphic designer'
                />
                <MemberComponent
                    img={img10}
                    name='Kelvin'
                    position='web3 Ddveloper'
                />
                <MemberComponent
                    img={img7}
                    name='DEATHSTROKE'
                    position='director'
                />
                <MemberComponent
                    img={img1}
                    name='Fiber Shake'
                    position='artist'
                />
            </Container>
        </Section>
    );
};

export default Team;
