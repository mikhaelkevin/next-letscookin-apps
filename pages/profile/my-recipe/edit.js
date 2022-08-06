import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../../../styles/EditMyRecipe.module.css";
import EditForm from "../../../components/recipe/EditForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const RecipeEditPage = () => {
  const recipeId = localStorage.getItem("recipeId");
  const { token } = useSelector((state) => state?.auth);

  console.log("recipeId, token :>> ", recipeId, token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace("/login");
    }

    if (!recipeId) {
      router.replace("/profile/my-recipe");
    }
  });

  return (
    <>
      <Head>
        <title>Edit Recipe</title>
      </Head>
      <div className={styles.mainPage}>
        <h3 className="themeColor text-center pt-4">Edit your recipe</h3>

        <EditForm recipeId={recipeId} token={token} />
      </div>
    </>
  );
};

export default RecipeEditPage;
