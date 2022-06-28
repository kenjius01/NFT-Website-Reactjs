import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';

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

const Navigation = () => {
    return (
        <Section>
            <Navbar>
                <Logo />
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Roadmap</MenuItem>
                    <MenuItem>Showcase</MenuItem>
                    <MenuItem>Team</MenuItem>
                    <MenuItem>Faq</MenuItem>
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
