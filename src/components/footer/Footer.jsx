import React from 'react';
import styled from 'styled-components';
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
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
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
`;

const Footer = () => {
    return (
        <Section>
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
                            <Facebook />
                        </a>
                        <a
                            href='https://www.instagram.com/just_kt01'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Instagram />
                        </a>
                        <a
                            href='https://twitter.com/home'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Twitter />
                        </a>
                        <a
                            href='https://www.linkedin.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <LinkedIn />
                        </a>
                    </IconList>
                </Left>
                <MenuItems>
                    <Item>Home</Item>
                    <Item>About</Item>
                    <Item>Roadmap</Item>

                    <Item>Showcase</Item>
                    <Item>Team</Item>
                    <Item>Faq</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} created. All rights
                    reversed.
                </span>
                <span>
                    Made with &#10084; by{' '}
                    <strong style={{ fontFamily: 'Akaya Telivigala', fontSize:'20px' }}>
                        KT
                    </strong>
                </span>
            </Bottom>
        </Section>
    );
};

export default Footer;
