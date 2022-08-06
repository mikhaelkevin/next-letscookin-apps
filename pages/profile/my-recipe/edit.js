import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../../../styles/EditMyRecipe.module.css";
import EditForm from "../../../components/recipe/EditForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const RecipeEditPage = (props) => {
  const router = useRouter();
  const { recipeId } = router?.query;
  const { token } = useSelector((state) => state?.auth);

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
