import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const EditForm = (props) => {
  const { recipeId, token } = props;
  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [oldValue, setOldValue] = useState([]);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [picture, setPicture] = useState(null);

  const fetchOldData = async (id) => {
    try {
      setOldValue([]);
      const response = await axios("/api/detailRecipe/", {
        params: {
          id,
        },
      });
      setOldValue(response?.data);
    } catch (error) {
      setIsError(true);
      setMessage(
        error?.response?.data?.message ||
          error?.response?.data ||
          "Something wrong with the server"
      );
    }
  };

  const requestPatchRecipe = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("ingredients", ingredients);
      formData.append("recipePicture", picture);
      formData.append("id", recipeId);

      const response = await axios.patch(
        `${process.env.CLIENT_API_URL}letscookinapps/recipes/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsSuccess(true);
      setMessage(response?.data?.message);
      setTimeout(() => {
        router.replace("/profile/my-recipe");
      }, 3000);
    } catch (error) {
      console.log("error :>> ", error);
      setIsError(true);
      setMessage(
        error?.response?.data?.message ||
          error?.response?.data ||
          "Something wrong with the server"
      );
    }
  };

  useEffect(() => {
    fetchOldData(recipeId);
    setIsSuccess(false);
    setIsError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isSuccess && (
        <>
          <div className="alert alert-success mt-2 text-center">
            <div>
              <span>
                {message} Please wait, redirecting to your recipe page
              </span>
            </div>
            <div className="spinner-border" role="status">
              <span className="sr-only" />
            </div>
          </div>
        </>
      )}

      {isError && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={(e) => requestPatchRecipe(e)}>
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
            placeholder={
              oldValue?.[0]?.title
                ? `Old title: ${oldValue?.[0]?.title}`
                : "Loading.."
            }
            aria-label="recipe-title"
            aria-describedby="recipe-title"
            disabled={!oldValue?.[0]?.title || isSuccess}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-4">
          <textarea
            className="form-control"
            id="recipe-ingredients"
            rows="5"
            placeholder={
              oldValue?.[0]?.ingredients
                ? `Old ingredients: ${oldValue?.[0]?.ingredients}`
                : "Loading.."
            }
            disabled={!oldValue?.[0]?.ingredients || isSuccess}
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
            onChange={(e) => setPicture(e.target.files?.[0])}
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
            //   onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-warning btn-lg w-50"
            disabled={isSuccess || !oldValue.length}
          >
            EDIT
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
