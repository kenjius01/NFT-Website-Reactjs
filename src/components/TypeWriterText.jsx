import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
    font-size: ${(prop) => prop.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${(prop) => prop.theme.text};
    align-self: flex-start;

    span {
        text-transform: uppercase;
        font-family: 'Akaya Telivigala', cursive;
    }

    .text1 {
        color: blue;
    }
    .text2 {
        color: orange;
    }

    .text3 {
        color: purple;
    }
    .text4 {
        color: red;
    }

    @media (max-width: 70em) {
        font-size: ${(prop) => prop.theme.fontxl};

    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
`;

const Subtitle = styled.h3`
    font-size: ${(prop) => prop.theme.fontlg};
    color: ${(prop) => `rgba(${prop.theme.textRgba},0.6)`};
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        font-size: ${(prop) => prop.theme.fontmd};
        align-self: center;
        text-align: center;
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        font-size: ${(prop) => prop.theme.fontmd};
        align-self: center;
        text-align: center;
    }
`;

const TypeWriterText = () => {
    return (
        <>
            <Title>
                Discover a new area of cool
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<span class="text1">NFTs.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(
                                '<span class="text2">Collectible Items.</span>'
                            )
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(
                                '<span class="text3">characters!</span>'
                            )
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(
                                '<span class="text4">Ape Killers!</span>'
                            )
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Title>
            <Subtitle>bore of apes? Try something new.</Subtitle>
            <ButtonContainer>
                <Button text='Explore' link={'#about'} />
            </ButtonContainer>
        </>
    );
};

export default TypeWriterText;
