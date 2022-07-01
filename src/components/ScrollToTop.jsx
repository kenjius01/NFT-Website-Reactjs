import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { useWindowScroll } from 'react-use';

const Up = styled.div`
    /* box-sizing: border-box; */
    margin: 0;
    padding: 3px;
    color: ${(prop) => prop.theme.colorMode};
    background-color: ${(prop) => prop.theme.bodyMode};
    width: 3rem;
    height: 3rem;

    font-size: ${(prop) => prop.theme.fontxl};
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    z-index: 5;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }
    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 30em) {
        font-size: ${(prop) => prop.theme.fontlg};
        padding: 0px;
        right: 3rem;
    }
`;

const ScrollToTop = () => {
    const ref = useRef(null);
    const { y } = useWindowScroll();
    const scrollTo = () => {
        let element = document.getElementById('nav');
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    useLayoutEffect(() => {
        if (y < 300) {
            ref.current.style.display = 'none';
        } else {
            ref.current.style.display = 'flex';
        }
    }, [y]);

    return (
        <Up ref={ref} onClick={scrollTo}>
            &#x2191;
        </Up>
    );
};

export default ScrollToTop;
