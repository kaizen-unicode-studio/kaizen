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
          spaceBetween={20}
          breakpoints={{
            1080: { slidesPerView: 2, centeredSlides: true, spaceBetween: 0 },
            768: { slidesPerView: 2, centeredSlides: true, spaceBetween: 20 },
            520: { slidesPerView: 1, centeredSlides: true, spaceBetween: 0 },
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
