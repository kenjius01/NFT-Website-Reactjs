import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { useState } from 'react';

const Section = styled.section`
    width: 100vw;
    background-color: ${(props) => props.theme.body};
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85%;
    height: ${(prop) => prop.theme.navHeight};
    margin: 0 auto;

    .mobile {
        display: none;
    }

    @media (max-width: 64em) {
        .desktop {
            display: none;
        }
        .mobile {
            display: flex;
        }
    }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    @media (max-width: 64em) {
        /* 1024px */

        top: ${(prop) => prop.theme.navHeight};
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: ${(prop) => `calc(100vh - ${prop.theme.navHeight})`};
        z-index: 40;
        background-color: ${(prop) => `rgba(${prop.theme.bodyRgba}, 0.8)`};
        position: fixed;
        backdrop-filter: blur(2px);

        transform: ${(prop) =>
            prop.click ? 'translateY(0)' : 'translateY(1000%)'};
        transition: all 0.3s ease;
        flex-direction: column;
        justify-content: center;

        touch-action: none;
    }
`;
const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${(prop) => prop.theme.text};
    cursor: pointer;

    @media (max-width: 64em) {
        /* 1024px */
        margin: 1rem 0;
    }

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

const Toggle = styled.div`
    display: flex;
    justify-content: space-between;
    border: 3px solid ${(prop) => prop.theme.text};
    border-radius: 1.5rem;
    position: relative;
    padding: 3px;
    cursor: pointer;
    gap: 0.5rem;

    & > * {
        color: ${(prop) => prop.theme.text};
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const Switch = styled.div`
    border-radius: 100%;
    background: ${(prop) => prop.theme.text};
    position: absolute;
    transition: all 0.3s linear;
`;

const OtherMenu = styled.span`
    width: ${(prop) => (prop.click ? '2rem' : '1.5rem')};
    height: 2px;
    background-color: ${(prop) => prop.theme.text};
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: ${(prop) =>
        prop.click
            ? 'translateX(-50%) rotate(90deg)'
            : 'translateX(-50%) rotate(0deg)'};
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s linear;

    @media (max-width: 64em) {
        /* 1024px */
        display: flex;
    }

    &::after,
    &::before {
        content: ' ';
        width: ${(prop) => (prop.click ? '1rem' : '1.5rem')};
        height: 2px;
        right: ${(prop) => (prop.click ? '-2px' : '0')};
        background-color: ${(prop) => prop.theme.text};
        position: absolute;
    }

    &::after {
        top: ${(prop) => (prop.click ? '0.3rem' : '0.5rem')};
        transform: ${(prop) =>
            prop.click ? 'rotate(-40deg)' : 'rotate(0deg)'};
    }
    &::before {
        bottom: ${(prop) => (prop.click ? '0.3rem' : '0.5rem')};
        transform: ${(prop) => (prop.click ? 'rotate(40deg)' : 'rotate(0deg)')};
    }
`;

const Navigation = ({ setDarkMode, darkMode }) => {
    const [click, setClick] = useState(false);
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
        });
        setClick(false);
    };

    return (
        <Section id='nav'>
            <Navbar>
                <Logo />
                <Toggle onClick={() => setDarkMode(!darkMode)}>
                    <Sun />
                    <Moon />

                    <Switch
                        style={
                            darkMode
                                ? {
                                      transform: 'translateX(2.2rem)',
                                  }
                                : {
                                      right: 'translateX(-2.2rem)',
                                  }
                        }
                    />
                </Toggle>
                <OtherMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </OtherMenu>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')}>
                        Roadmap
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo('showcase')}>
                        Showcase
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
                    <MenuItem>
                        <div className='mobile'>
                            <Button
                                text={'Connect Wallet'}
                                link='https://google.com'
                                target={'_blank'}
                            />
                        </div>
                    </MenuItem>
                </Menu>
                <div className='desktop'>
                    <Button
                        text={'Connect Wallet'}
                        link='https://google.com'
                        target={'_blank'}
                    />
                </div>
            </Navbar>
        </Section>
    );
};

export default Navigation;
