import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const AddForm = ({ data, setter }) => {
  const { isSuccess, auth } = data;
  const { user } = auth;

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [picture, setPicutre] = useState({});

  const router = useRouter();

  const requestAddRecipe = async (e) => {
    // Refersh error and success to default
    setter({ errorStatus: false, successStatus: false });
    e.preventDefault();

    // Data declaration as new FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("recipePicture", picture);
    formData.append("userId", user?.id);
    try {
      const response = await axios.post(
        `${process.env.CLIENT_API_URL}/letscookinapps/recipes/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${auth?.token}`,
          },
        }
      );
      setter({ successStatus: true, message: response?.data?.message });
      setTimeout(() => router.replace("/"), 2000);
    } catch (error) {
      setter({
        errorStatus: true,
        message:
          error?.response?.data?.message || "Something wrong with data input",
      });
    }
  };
  return (
    <form onSubmit={(e) => requestAddRecipe(e)}>
      <div className="input-group input-group-lg mb-4">
        <span className="input-group-text" id="recipe-title">
          <Image
            src="/images/book-open.svg"
            width="25%"
            height="25%"
            alt="RecipeTitle"
          />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          aria-label="recipe-title"
          aria-describedby="recipe-title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group input-group-lg mb-4">
        <textarea
          className="form-control"
          id="recipe-ingredients"
          rows="5"
          placeholder={`Type your ingredients here \nExample: Bawang putih, Daging Sapi, Kecap`}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="input-group input-group-lg mb-4">
        <span className="input-group-text" id="recipe-picture">
          <Image
            src="/images/picture.svg"
            width="25%"
            height="25%"
            alt="RecipePicture"
          />
        </span>
        <input
          type="file"
          className="form-control"
          placeholder="Add Picutre"
          aria-label="recipe-picture"
          aria-describedby="recipe-picture"
          onChange={(e) => setPicutre(e.target.files[0])}
        />
      </div>
      <div className="input-group input-group-lg mb-4">
        <span
          className="input-group-text"
          id="recipe-videos"
          style={{ backgroundColor: "#e9ecef" }}
        >
          <Image
            src="/images/video.svg"
            width="25%"
            height="25%"
            alt="RecipeVideos"
          />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Video (Coming Soon)"
          aria-label="recipe-videos"
          aria-describedby="recipe-videos"
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning btn-lg w-50" disabled={isSuccess}>
          POST
        </button>
      </div>
    </form>
  );
};

export default AddForm;
