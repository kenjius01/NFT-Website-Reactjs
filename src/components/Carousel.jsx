import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from '../assets/Nfts/bighead.svg';
import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import img9 from '../assets/Nfts/bighead-9.svg';
import img10 from '../assets/Nfts/bighead-10.svg';
import img11 from '../assets/Nfts/bighead-11.svg';
import img12 from '../assets/Nfts/bighead-12.svg';
import img13 from '../assets/Nfts/bighead-13.svg';
import img14 from '../assets/Nfts/bighead-14.svg';
import img15 from '../assets/Nfts/bighead-15.svg';
import img16 from '../assets/Nfts/bighead-16.svg';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
    width: 25vw;
    height: 70vh;

    @media (max-width: 70em) {
        height: 60vh;
        width: 30vw;
    }

    @media (max-width: 64em) {
        height: 50vh;
        width: 30vw;
    }

    @media (max-width: 48em) {
        height: 40vh;
        width: 40vw;
    }

    @media (max-width: 30em) {
        height: 40vh;
        width: 50vw;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${(prop) => prop.theme.carouselColor};
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .swiper-button-next {
        color: ${(prop) => prop.theme.text};
        right: 0;
        top: 60%;
        width: 4rem;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &::after {
            display: none;
        }
        @media (max-width: 64em) {
            width: 3rem;
            /* right: 1rem; */
        }

        @media (max-width: 48em) {
            width: 2rem;
        }
    }
    .swiper-button-prev {
        color: ${(prop) => prop.theme.text};
        left: 0;
        top: 60%;
        width: 4rem;
        transform: rotate(180deg);
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &::after {
            display: none;
        }

        @media (max-width: 64em) {
            width: 3rem;
        }

        @media (max-width: 48em) {
            width: 2rem;
        }
    }
`;

const Carousel = () => {
    return (
        <Container>
            <Swiper
                navigation
                scrollbar={{
                    draggable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}
                effect='cards'
                grabCursor
                modules={[EffectCards, Pagination, Autoplay, Navigation]}
                // rewind
                className='mySwiper'
            >
                <SwiperSlide>
                    <img src={img} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img9} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img10} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img11} alt='img-nfts' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img12} alt='img-nfts' />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <img src={img13} alt='img-nfts' />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <img src={img14} alt='img-nfts' />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <img src={img15} alt='img-nfts' />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <img src={img16} alt='img-nfts' />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Carousel;
