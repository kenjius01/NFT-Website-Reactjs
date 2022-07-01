import React from 'react';
import styled, { useTheme } from 'styled-components';
import Facebook from '../../Icons/Facebook';
import Instagram from '../../Icons/Instagram';
import LinkedIn from '../../Icons/LinkedIn';
import Twitter from '../../Icons/Twitter';
import Banner from '../Banner';
import Logo from '../Logo';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    position: relative;
    z-index: 3;

    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(prop) => prop.theme.text};

    @media (max-width: 48em) {
        width: 90%;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 48em) {
        width: 100%;
    }
`;
const IconList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    & > * {
        transition: all 0.3s ease;
    }

    & > *:hover {
        transform: scale(1.2);
    }
`;

const MenuItems = styled.ul`
    list-style: none;
    display: grid;
    width: 50%;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(3,1fr); */
    grid-gap: 1rem;

    @media (max-width: 48em) {
        display: none;
    }
`;

const Item = styled.li`
    margin: 0 1rem;
    color: ${(prop) => prop.theme.text};
    cursor: pointer;
    width: fit-content;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: ${(prop) => prop.theme.text};
        transition: width 0.3s ease;
    }
    &:hover {
        &::after {
            width: 100%;
        }
    }
`;

const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 48em) {
        flex-direction: column;
        width: 100%;

        span {
            margin-bottom: 1rem;
        }
    }
`;

const Footer = () => {
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const mode = useTheme().mode;

    return (
        <Section id='footer'>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a
                            href='https://www.facebook.com/kt.kenjius.77'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Facebook
                                stroke={mode === 'light' ? 'black' : 'white'}
                            />
                        </a>
                        <a
                            href='https://www.instagram.com/just_kt01'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Instagram
                                stroke={mode === 'light' ? 'black' : 'white'}
                            />
                        </a>
                        <a
                            href='https://twitter.com/home'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Twitter
                                stroke={mode === 'light' ? 'black' : 'white'}
                            />
                        </a>
                        <a
                            href='https://www.linkedin.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <LinkedIn
                                stroke={mode === 'light' ? 'black' : 'white'}
                            />
                        </a>
                    </IconList>
                </Left>
                <MenuItems>
                    <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('about')}>About</Item>
                    <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>

                    <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>Faq</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} created. All rights
                    reserved.
                </span>
                <span>
                    Made with &#10084; by{' '}
                    <strong
                        style={{
                            fontFamily: 'Akaya Telivigala',
                            fontSize: '20px',
                        }}
                    >
                        KT
                    </strong>
                </span>
            </Bottom>
        </Section>
    );
};

export default Footer;
