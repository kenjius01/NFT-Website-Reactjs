import React from 'react';
import styled, { keyframes } from 'styled-components';

import img11 from '../../assets/Nfts/bighead-11.svg';
import img12 from '../../assets/Nfts/bighead-12.svg';
import img13 from '../../assets/Nfts/bighead-13.svg';
import img14 from '../../assets/Nfts/bighead-14.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img16 from '../../assets/Nfts/bighead-16.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import ETH from '../../assets/icons8-ethereum-48.png';
import { useRef } from 'react';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: ${(prop) => prop.theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & > *:first-child {
        animation-duration: 20s;

        @media (max-width: 30em) {
            animation-duration: 15s;
        }
    }
    & > *:last-child {
        animation-duration: 14s;

        @media (max-width: 30em) {
            animation-duration: 8s;
        }
    }
`;

const move = keyframes`
  0%{ transform: translateX(100%)}
  100% { transform: translateX(-100%)}
`;

const Row = styled.div`
    /* background-color: lightblue;s */
    /* white-space: nowrap;
    box-sizing: content-box; */
    margin: 2rem 0;
    display: flex;
    animation: ${move} linear infinite ${(prop) => prop.direction};
`;
const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: ${(prop) => prop.theme.body};
    border-radius: 20px;
    cursor: pointer;

    @media (max-width: 48em) {
        width: 12rem;
    }

    @media (max-width: 30em) {
        width: 10rem;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

const Details = styled.div`
    display: flex;
    color: ${(prop) => prop.theme.body};
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${(prop) => prop.theme.text};

    border-radius: 0 0 20px 20px;
    border-top: none !important;
    border: 2px solid ${(prop) => `rgba(${prop.theme.bodyRgba}, 0.5)`};

    span {
        font-size: ${(prop) => prop.theme.fontsm};
        color: ${(prop) => `rgba(${prop.theme.bodyRgba}, 0.5)`};
        font-weight: 600;
        line-height: 1.5rem;
    }
    h1 {
        font-size: ${(prop) => prop.theme.fontmd};
        color: ${(prop) => prop.theme.body};
        font-weight: 600;

        @media (max-width: 30em) {
            font-size: ${(prop) => prop.theme.fontsm};
        }
    }
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 1rem;
        height: auto;
    }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
    let play = () => {
        passRef.current.style.animationPlayState = 'running';
    };
    let pause = () => {
        passRef.current.style.animationPlayState = 'paused';
    };

    return (
        <ImgContainer onMouseOut={() => play()} onMouseOver={() => pause()}>
            <img src={img} alt='The human' />
            <Details>
                <div>
                    <span>Weirdos</span>
                    <br />
                    <h1>#{number}</h1>
                </div>
                <div>
                    <span>Price</span>
                    <Price>
                        <img src={ETH} alt='ETH' />

                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    );
};

const Showcase = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    return (
        <Section id='showcase'>
            <Row direction='none' ref={row1Ref}>
                <NftItem
                    img={img11}
                    number={123}
                    price='1.5'
                    passRef={row1Ref}
                />
                <NftItem
                    img={img12}
                    number={343}
                    price='3.2'
                    passRef={row1Ref}
                />
                <NftItem
                    img={img13}
                    number={555}
                    price='0.9'
                    passRef={row1Ref}
                />
                <NftItem
                    img={img14}
                    number={985}
                    price='1.6'
                    passRef={row1Ref}
                />
                <NftItem
                    img={img5}
                    number={777}
                    price='4.2'
                    passRef={row1Ref}
                />
            </Row>
            <Row direction='reverse' ref={row2Ref}>
                <NftItem
                    img={img16}
                    number={824}
                    price='8.1'
                    passRef={row2Ref}
                />
                <NftItem
                    img={img7}
                    number={952}
                    price='2.3'
                    passRef={row2Ref}
                />
                <NftItem
                    img={img8}
                    number={245}
                    price='7.4'
                    passRef={row2Ref}
                />
                <NftItem
                    img={img9}
                    number={444}
                    price='6.2'
                    passRef={row2Ref}
                />
                <NftItem
                    img={img4}
                    number={672}
                    price='1.9'
                    passRef={row2Ref}
                />
            </Row>
        </Section>
    );
};

export default Showcase;
