"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "@/components/Slide.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContainer, StyledSlider } from "./style";
import "./style.css";
const Slider = () => {
  return (
    <StyledSlider>
      <SliderContainer>
        <Swiper
          pagination={{
            renderBullet: function (index, className) {
              return (
                '<span id="' +
                index +
                '" class="' +
                className +
                '">' +
                "</span>"
              );
            },
            clickable: true,
          }}
          autoplay={true}
          loop={true}
          slidesPerView={3}
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          breakpoints={{
            1920: { slidesPerView: 3, spaceBetween: 20 },
            1180: { slidesPerView: 3, spaceBetween: 20 },
            1080: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            450: { slidesPerView: 1, spaceBetween: 0 },
            375: { slidesPerView: 1, spaceBetween: 0 },
            0: { slidesPerView: 1, spaceBetween: 0 },
          }}
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
      </SliderContainer>
    </StyledSlider>
  );
};

export default Slider;
