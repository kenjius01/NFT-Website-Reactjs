import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import CoverGif from '../CoverGif';
import TypeWriterText from '../TypeWriterText';
import RoundTextBlack from '../../assets/Rounded-Text-Black.png';
import RoundTextWhite from '../../assets/Rounded-Text-White.png';


const Section = styled.section`
    min-height: ${(prop) => `calc(100vh - ${prop.theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
    width: 75%;
    min-height: 80vh;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }
`;

const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 6rem;
    height: 6rem;
    border: 1px solid ${(prop) => prop.theme.text};
    border-radius: 100%;
    /* cursor: pointer; */

    img {
        width: 100%;
        height: auto;
        animation: ${rotate} 6s linear infinite reverse;
    }
`;

const Circle = styled.span`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(prop) => prop.theme.text};
    color: ${(prop) => prop.theme.body};
    position: absolute;
    top: 25%;
    left: 25%;
    font-size: 1.6rem;
`;

const Home = () => {
    const mode = useTheme().mode;
    return (
        <Section id='home'>
            <Container>
                <Box>
                    <TypeWriterText />
                </Box>
                <Box>
                    <CoverGif />
                </Box>
                <Round>
                    <Circle>&#x2193;</Circle>
                    {mode === 'light' ? (
                        <img src={RoundTextBlack} alt='NFT' />
                    ) : (
                        <img src={RoundTextWhite} alt='NFT' />
                    )}
                </Round>
            </Container>
        </Section>
    );
};

export default Home;
