/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TopDetail(props) {
  const {
    data: { recipe_picture: image, author, title },
  } = props;
  const router = useRouter();
  const [disableButton, setDisableButton] = useState(false);

  return (
    <div className="card topDetail border-0">
      <img
        src={image ? image : "/images/image_notfound.png"}
        alt="DetailRecipePicture"
        className="w-100 h-100 detailRecipePicture"
      />
      <button
        className="btn backButtonDetailRecipe"
        onClick={() => {
          setDisableButton(true);
          router.back();
        }}
        disabled={disableButton}
      >
        <Image
          src="/images/back-button.svg"
          alt="backButton"
          width="20%"
          height="20px"
        />
      </button>
      <div className="card w-100 h-25 border-0 topDetailTitle">
        <div className="row px-3 h-100 mx-2">
          <div className="col-6 col-xl-8" style={{ color: "white" }}>
            <p className="detailRecipeAuthor mb-0">{title}</p>
            <p className="subFontResponsive">by {author}</p>
          </div>
          <div className="col-6 col-xl-4 d-flex justify-content-center">
            {/* Put button bookmark and like here*/}
          </div>
        </div>
      </div>
    </div>
  );
}
