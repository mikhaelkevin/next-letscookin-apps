/* eslint-disable @next/next/no-img-element*/
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewRecipe(props) {
  const { data } = props;
  const router = useRouter();

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
            <Link href={`/recipe/${recipe.id}`}>
              <a>
                <div className="card swiperCardBody p-1">
                  <img
                    src={
                      recipe.recipe_picture
                        ? recipe.recipe_picture
                        : "/images/image_notfound.png"
                    }
                    alt="Recipe Swiper Image"
                    className="w-100 h-100"
                  />
                  <p>{recipe.title}</p>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
