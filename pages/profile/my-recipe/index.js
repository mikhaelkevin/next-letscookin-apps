import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/MyRecipe.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

const MyRecipePage = () => {
  const { user, token } = useSelector((state) => state?.auth);
  const router = useRouter();

  const [myRecipe, setMyRecipe] = useState([]);
  const [appendDelAlert, setAppendDelAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [delTarget, setDelTarget] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const getMyRecipe = async (userId) => {
    try {
      const response = await axios.post("/api/myRecipe", { userId, token });
      setMyRecipe(response?.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const requestDelRecipe = async (recipeId) => {
    try {
      setIsLoading(true);
      await axios("/api/deleteRecipe", {
        params: {
          recipeId,
          token,
        },
      });
      setTimeout(() => {
        setIsSuccess(true);
      }, 3000);
    } catch (error) {
      console.log("error :>> ", error.response);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    setIsSuccess(false);
    setAppendDelAlert(false);
    setIsLoading(false);
    setDelTarget(0);
    getMyRecipe(user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <>
      <Head>
        <title>My Recipe</title>
      </Head>
      <div className={styles.mainPage}>
        <div className={styles.header}>
          <button className="btn btn-light">
            <Image
              src="/images/back-button-default.svg"
              width="100%"
              height="100%"
              alt="header-back"
              onClick={() => router.back()}
            />
          </button>
          <h2>My Recipe</h2>
        </div>
        <div className={styles.content}>
          {appendDelAlert && (
            <div className="alert alert-danger text-center ">
              <h2>Are you sure want to delete the recipe?</h2>
              <div className="my-3">
                <button
                  className="btn btn-primary m-2"
                  onClick={() => requestDelRecipe(delTarget)}
                  disabled={isLoading}
                >
                  {isLoading ? "Deleting..." : "Yes, delete it"}
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => setAppendDelAlert(false)}
                >{`No, it's a mistake`}</button>
              </div>
            </div>
          )}
          {myRecipe?.map((recipe) => (
            <div className="card box-shadow" key={recipe.id}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-3 ">
                  <Link href={`/recipe/${recipe.id}`}>
                    <a>
                      <Image
                        src={
                          recipe?.recipe_picture
                            ? recipe?.recipe_picture
                            : "/images/image_notfound.png"
                        }
                        width="100%"
                        height="100%"
                        alt="card-image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="col-7">
                  <h3>{recipe.title}</h3>
                </div>
                <div className="col-2">
                  <div className={styles.recipeMenu}>
                    <span>
                      <Image
                        src="/images/edit-icon.svg"
                        width="30px"
                        height="30px"
                        alt="edit-icon"
                        onClick={() => {
                          router.push(
                            `/profile/my-recipe/edit/?recipeId=${recipe.id}`,
                            "/profile/my-recipe/edit",
                            { shallow: true }
                          );
                        }}
                      />
                    </span>
                    <span>
                      <Image
                        src="/images/delete-icon.svg"
                        width="30px"
                        height="30px"
                        alt="delete-icon"
                        onClick={() => {
                          setAppendDelAlert(true);
                          setDelTarget(recipe?.id);
                        }}
                      />
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRecipePage;
