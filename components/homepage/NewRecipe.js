/* eslint-disable @next/next/no-img-element*/
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

export default function NewRecipe() {
  return (
    <div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={3}
        className="mb-5"
      >
        <SwiperSlide>
          <div className="card swiperCardBody p-1">
            <img
              src="/images/satepadang.jfif"
              alt="swiper image"
              className="w-100 h-100"
            />
            <p>Sate Padang Khas Bandung</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiperCardBody p-1">
            <img
              src="/images/satepadang.jfif"
              alt="swiper image"
              className="w-100 h-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiperCardBody p-1">
            <img
              src="/images/satepadang.jfif"
              alt="swiper image"
              className="w-100 h-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiperCardBody p-1">
            <img
              src="/images/satepadang.jfif"
              alt="swiper image"
              className="w-100 h-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiperCardBody p-1">
            <img
              src="/images/satepadang.jfif"
              alt="swiper image"
              className="w-100 h-100"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
