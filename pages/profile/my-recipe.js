import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/MyRecipe.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

const MyRecipePage = () => {
  const { user, token } = useSelector((state) => state?.auth);
  const [myRecipe, setMyRecipe] = useState([]);
  const router = useRouter();

  const getMyRecipe = async (userId) => {
    try {
      const response = await axios.post("/api/myRecipe", { userId, token });
      setMyRecipe(response?.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getMyRecipe(user?.id);
  });

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
          {myRecipe?.map((recipe) => (
            <div className="card box-shadow" key={recipe.id}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-3 ">
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
                </div>
                <div className="col-6">
                  <h3>{recipe.title}</h3>
                </div>
                <div className="col-3">
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRecipePage;
