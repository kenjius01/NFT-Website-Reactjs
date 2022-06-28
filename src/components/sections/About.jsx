import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dark } from '../../styles/Themes';
import Button from '../Button';
import Carousel from '../Carousel';

const Section = styled.section`
    min-height: 100vh;
    background-color: ${(prop) => prop.theme.text};
    /* color: ${(prop) => prop.theme.body}; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Container = styled.div`
    width: 75%;
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

const Title = styled.h2`
    font-size: ${(prop) => prop.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${(prop) => prop.theme.body};
    margin: 0 auto;
`;
const SubText = styled.h3`
    font-size: ${(prop) => prop.theme.fontlg};
    color: ${(prop) => prop.theme.body};
    font-weight: 400;
    width: 80%;
    margin: 1rem auto;
`;
const SubTextLight = styled.h4`
    font-size: ${(prop) => prop.theme.fontmd};
    color: ${(prop) => `rgba(${prop.theme.bodyRgba},0.6)`};
    width: 80%;
    font-weight: 300;
    margin: 1rem auto;
`;

const ButtonContainer = styled.div`
   width: 80%;
   align-self: flex-start;
   margin: 1rem auto;
`;

const About = () => {
    return (
        <Section id='about'>
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Title>Welcome To The Weirdos Club.</Title>
                    <SubText>
                        The WEIRDOS CLUB is a private collection of NFTs—unique
                        digital collectibles. The Weirdos are stored as ERC-721
                        tokens on the Ethereum blockchain and hosted on IPFS.
                    </SubText>
                    <SubTextLight>
                        With more than 200+ hand drawn traits, each NFT is
                        unique and comes with a membership to an exclusive group
                        of successful investors. Join an ambitious ever-growing
                        community with multiple benefits and utilities.
                    </SubTextLight>
                    <ButtonContainer>
                      <ThemeProvider theme={dark}>
                        <Button text={'Join our discord'} link='#' />

                      </ThemeProvider>
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    );
};

export default About;
