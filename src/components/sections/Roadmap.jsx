import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';

const Section = styled.section`
    min-height: 200vh;
    width: 100vw;
    background-color: ${(prop) => prop.theme.body};
    position: relative;
`;
const Title = styled.h1`
    font-size: ${(prop) => prop.theme.fontxxl};
    text-transform: capitalize;
    color: ${(prop) => prop.theme.text};
    /* text-align: center; */
    display: flex;
    margin: 1rem auto;
    border-bottom: 3px solid ${(prop) => prop.theme.text};
    width: fit-content;

    @media (max-width: 48em) {
        font-size: ${(prop) => prop.theme.fontxl};
    }
`;

const Container = styled.div`
    width: 70%;
    height: 200vh;
    background-color: ${(prop) => prop.theme.body};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 64em) {
        width: 80%;
    }
    @media (max-width: 48em) {
        width: 90%;
    }
`;

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: greenyellow; */

    & > *:nth-last-of-type(2n) {
        justify-content: start;

        /* @media (max-width: 48em) {
            justify-content: center;
        } */

        div {
            border-radius: 50px 0;
            text-align: right;
        }
        p {
            border-radius: 30px 0;
        }
    }
    & > *:nth-last-of-type(2n + 1) {
        justify-content: end;
        /* 
        @media (max-width: 48em) {
            justify-content: center;
        } */

        div {
            text-align: left;
            border-radius: 0 50px;
        }
        p {
            border-radius: 0 30px;
        }
    }
`;
const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 48em) {
        justify-content: flex-end !important;
    }
`;
const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${(prop) => prop.theme.text};

    @media (max-width: 48em) {
        width: 70%;
    }
`;
const Box = styled.p`
    height: fit-content;
    background-color: ${(prop) => prop.theme.carouselColor};
    color: ${(prop) => prop.theme.text};
    padding: 1rem;
    position: relative;
    border: 1px solid ${(prop) => prop.theme.text};
`;
const SubTitle = styled.span`
    display: block;
    font-size: ${(prop) => prop.theme.fontxl};
    text-transform: capitalize;
    color: #202020;

    @media (max-width: 48em) {
        font-size: ${(prop) => prop.theme.fontlg};
        font-weight: 600;
    }

`;
const Text = styled.span`
    display: block;
    font-size: ${(prop) => prop.theme.fontsm};
    text-transform: capitalize;
    color: #202020;
    font-weight: 400;
    margin: 0.5rem 0;

    @media (max-width: 48em) {
        font-size: ${(prop) => prop.theme.fontxs};
    }
`;

const RoadMapItem = ({ title, subtext, addToRef }) => {
    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    );
};

const Roadmap = () => {
    const revealRefs = useRef([]);
    gsap.registerPlugin(ScrollTrigger);
    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };
    useLayoutEffect(() => {
        let t1 = gsap.timeline();

        revealRefs.current.forEach((el, index) => {
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0',
                },
                {
                    y: '-40%',
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center+=100px',
                        end: 'bottom center',
                        scrub: true,
                        // markers:true,
                    },
                }
            );
        });
    }, []);
    return (
        <Section id='roadmap'>
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem
                        addToRef={addToRefs}
                        title={'Grand Opening'}
                        subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.'
                    />
                    <RoadMapItem
                        addToRef={addToRefs}
                        title={'Great Benefits'}
                        subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.'
                    />
                    <RoadMapItem
                        addToRef={addToRefs}
                        title={'Early Access'}
                        subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.'
                    />
                    <RoadMapItem
                        addToRef={addToRefs}
                        title={'New Merch'}
                        subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.'
                    />
                    <RoadMapItem
                        addToRef={addToRefs}
                        title={'Holders Ranking'}
                        subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.'
                    />
                    {/* <RoadMapItem title={'Hellow worl'} subtext='owlhg' /> */}
                </Items>
            </Container>
        </Section>
    );
};

export default Roadmap;
