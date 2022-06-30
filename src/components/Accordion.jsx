import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Plus } from '../Icons/Plus';
import { Minus } from '../Icons/Minus';

const Container = styled.div`
    cursor: pointer;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(prop) => prop.theme.carouselColor};
    margin: 3rem 0;
`;
const Title = styled.div`
    font-size: ${(prop) => prop.theme.fontsm};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(prop) => prop.theme.body};
`;

const Reveal = styled.div`
    display: ${(prop) => (prop.clicked ? 'block' : 'none')};
    margin-top: 1rem;
    color: ${(prop) => `rgba(${prop.theme.bodyRgba}, 0.6)`};
    font-size: ${(prop) => prop.theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
`;

const Indicator = styled.span`
    font-size: ${(prop) => prop.theme.fontxxl};

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 1rem;
        height: auto;
        fill: ${(prop) => prop.theme.carouselColor};
    }
`;

const Accordion = ({ title, children }) => {
    const [collapse, setCollapse] = useState(false);
    return (
        <Container>
            <Title onClick={() => setCollapse(!collapse)}>
                <span>{title}</span>
                {collapse ? (
                    <Indicator>
                        <Minus />
                    </Indicator>
                ) : (
                    <Indicator>
                        <Plus />
                    </Indicator>
                )}
            </Title>
            <Reveal clicked={collapse}>{children}</Reveal>
        </Container>
    );
};

export default Accordion;
