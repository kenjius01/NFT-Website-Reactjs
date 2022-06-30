import React from 'react';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const Confetti = () => {
    const { width, height } = useWindowSize();
    return <ReactConfetti gravity={0.01} width={width} height={height * 1.5} />;
};

export default Confetti;
