import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(prop) => prop.theme.text};
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: ${(prop) => prop.theme.fontxxl};
    text-transform: uppercase;
    color: ${(prop) => prop.theme.body};
    margin: 1rem auto;
    border-bottom: 3px solid ${(prop) => prop.theme.body};
    width: fit-content;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    /* align-content: center; */
`;

const Box = styled.div`
    width: 45%;
`;

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;

        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        });

        return () => {
            ScrollTrigger.kill();
        };
    });

    return (
        <Section ref={ref}>
            <Title>faq</Title>
            <Container>
                <Box>
                    <Accordion title='WHERE CAN I VIEW MY NFTS?'>
                        Once minted or bought simply connect to your OpenSea
                        account to view your NFTs.
                    </Accordion>
                    <Accordion title='WHAT IS THE METAVERSE?'>
                        A metaverse is a network of 3D virtual worlds focused on
                        social connection. In futurism and science fiction, it
                        is often described as a hypothetical iteration of the
                        Internet as a single, universal virtual world that is
                        facilitated by the use of virtual and augmented reality
                        headsets.
                    </Accordion>
                    <Accordion title='WHY DO WE NEED ROYALTIES?'>
                        The amount of royalties was fixed at 5% to finance the
                        Weirdos Club's projects. We have the ambition to
                        organize multiple events around the world in order to
                        strengthen the community and build a network of
                        entrepreneurs and investors with the same mindset and
                        common interests.
                    </Accordion>
                </Box>
                <Box>
                    {' '}
                    <Accordion title='HOW CAN I USE MY NFT?'>
                        You will be able to use your NFT as an avatar in the
                        Metaverse and our future video game. Holding also means
                        that you are part of an exclusive network of investors
                        and entrepreneurs.
                    </Accordion>{' '}
                    <Accordion title='WHAT ARE THE WEIRDOS?'>
                        A weirdo is a person who behaves in ways that are
                        considered odd or unconventional.
                    </Accordion>{' '}
                    <Accordion title='WHAT IS THE FUSION PROCESS?'>
                        In a fusion reaction, two light nuclei merge to form a
                        single heavier nucleus. The process releases energy
                        because the total mass of the resulting single nucleus
                        is less than the mass of the two original nuclei. The
                        leftover mass becomes energy.
                    </Accordion>
                </Box>
            </Container>
        </Section>
    );
};

export default Faq;
