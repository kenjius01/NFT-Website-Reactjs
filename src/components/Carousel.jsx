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

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
    width: 25vw;
    height: 70vh;
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${(prop) => prop.theme.carouselColor};
        border-radius: 24px;
        display: flex;
        align-items: center;
    }

    .swiper-button-next {
        color:  ${(prop) => prop.theme.text};
        right: 0;
        top: 60%;
        width: 4rem;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &::after {
            display: none;
        }
    }
    .swiper-button-prev {
        color:  ${(prop) => prop.theme.text};
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
    }
`;

const Carousel = () => {
    return (
        <Container>
            <Swiper
            navigation
            scrollbar={{
                draggable: true
            }}
            autoplay={{
                delay:2000,
                disableOnInteraction: false,
            }}
            pagination={{
                type:'fraction'
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
            </Swiper>
        </Container>
    );
};

export default Carousel;
