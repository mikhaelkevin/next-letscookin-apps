/* eslint-disable @next/next/no-img-element*/
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

export default function NewRecipe(props) {
  const { data } = props;
  return (
    <div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={3}
        className="mb-5"
      >
        {data.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <div className="card swiperCardBody p-1">
              <img
                src={
                  recipe.recipe_picture
                    ? recipe.recipe_picture
                    : "/images/image_notfound"
                }
                alt="Recipe Swiper Image"
                className="w-100 h-100"
              />
              <p>{recipe.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
