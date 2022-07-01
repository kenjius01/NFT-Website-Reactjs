import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

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
`;

const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`;
const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${(prop) => prop.theme.text};
    cursor: pointer;
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
`;

const Navigation = ({ setDarkMode, darkMode }) => {
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <Section>
            <Navbar>
                <Logo />
                <Toggle onClick={() => setDarkMode(!darkMode)}>
                    <Sun />
                    <Moon />

                    <Switch
                        style={
                            darkMode
                                ? {
                                      left: '2.3rem',
                                  }
                                : {
                                      right: '2.3rem',
                                  }
                        }
                    />
                </Toggle>
                <Menu>
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
                </Menu>
                <Button
                    text={'Connect Wallet'}
                    link='https://google.com'
                    target={'_blank'}
                />
            </Navbar>
        </Section>
    );
};

export default Navigation;
