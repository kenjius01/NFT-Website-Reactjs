import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import Vector from '../Icons/Vector';

const VectorContainer = styled.div`
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 48em) {
        left: 2rem;
    }
`;

const Bounce = keyframes`
    from {transform: translateX(-50%) scale(0.7)}
    to {transform: translateX(-50%) scale(1)}
`;

const Ball = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    background-color: ${(prop) => prop.theme.text};

    @media (max-width: 48em) {
        left: 2rem;
    }

    animation: ${Bounce} 0.5s linear infinite alternate;
`;

const DrawSvg = () => {
    const ref = useRef(null);
    const ballRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;
        let svg = document.getElementsByClassName('svg-path')[0];
        const length = svg.getTotalLength();
        // console.log(length);

        // Start positioning of svg drawing
        svg.style.strokeDasharray = length;
        svg.style.strokeDashoffset = length;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    // console.log(self);
                    const draw = length * self.progress;
                    // Reverse drawing when scroll goes up
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        ballRef.current.style.display = 'none';
                    } else {
                        ballRef.current.style.display = 'block';
                    }
                },
            },
        });
        return () => {
            if (t1) t1.kill();
        };
    }, []);

    const mode = useTheme().mode;

    return (
        <>
            <Ball ref={ballRef} />
            <VectorContainer ref={ref}>
                <Vector stroke={mode === 'light' ? 'black' : 'white'} />
            </VectorContainer>
        </>
    );
};

export default DrawSvg;
