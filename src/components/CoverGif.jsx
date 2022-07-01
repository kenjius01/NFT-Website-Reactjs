import React from 'react';
import styled from 'styled-components';
// import GIF from '../assets/Home Video.mp4';
import GIF from '../assets/Home GIF.gif';

const VideoContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 64em) {
        min-width: 40vh;
    }
`;

const CoverGif = () => {
    return (
        <VideoContainer>
            <img src={GIF} alt='gif' />
        </VideoContainer>
    );
};

export default CoverGif;
