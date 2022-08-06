/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import styles from "../../styles/DetailRecipe.module.css";
import axios from "axios";
import TopDetail from "../../components/detailRecipe/TopDetail";
import Image from "next/image";
import Navtab from "../../components/detailRecipe/Navtab";

export const getStaticPaths = async () => {
  try {
    const recipeList = await fetch(
      `${process.env.API_URL}/letscookinapps/recipes/`
    );

    const recipeListData = await recipeList.json();

    return {
      paths: recipeListData?.map((recipe) => ({
        params: {
          id: recipe?.id?.toString(),
        },
      })),
      fallback: "blocking",
    };
  } catch (error) {
    console.log("error", error);
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const detailRecipe = await axios.post(
      `${process.env.API_URL}/letscookinapps/recipes/detail/`,
      { id: params?.id }
    );
    const detailRecipeData = await detailRecipe?.data;

    return {
      props: {
        detailRecipe: detailRecipeData,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function DetailRecipe({ detailRecipe }) {
  // HELPER
  const [selectedMenu, setSelectedMenu] = React.useState("ingredients");

  // VARIABLE DECLARE
  const { recipe, userCommentary } = detailRecipe;
  const recipeInformation = recipe?.[0];
  const ingredients = recipeInformation?.ingredients?.split(",");

  // LOGIC
  const ingredientsData = (arrayIngredients) => {
    return arrayIngredients?.map((value) => (
      <p className="bottomDetailNavtabFont" key={value}>
        - {value}
      </p>
    ));
  };

  const appendComment = (arrayComment) => {
    return arrayComment?.map((value, index) => (
      <div className="row" key={index}>
        <div className="col-3 my-2 colAvatar" key={index}>
          <Image
            src={value.profile_picture}
            width="75%"
            height="75%"
            alt="UserIcon"
            className="commentAvatar"
          />
        </div>
        <div className="col-9 my-2 colComment">
          <div>
            <p className="bottomDetailNavtabFont">{value.name}</p>
            <p className="subFontResponsive">{value.comment}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Head>
        <title>Detail Recipe</title>
      </Head>
      <div className={styles.mainPage}>
        <TopDetail data={recipeInformation} />
        <div className="card bottomDetail scroll">
          <Navtab menu={(menu) => setSelectedMenu(menu)} />
          <div className="p-3 h-100">
            {selectedMenu === "ingredients" && ingredientsData(ingredients)}

            {selectedMenu === "videos" && (
              <h1 className="text-center text-info">UNDER MAINTENANCE</h1>
            )}

            {selectedMenu === "comment" && "message" in userCommentary[0] && (
              <h1 className="text-center text-info">
                {userCommentary?.[0].message}
              </h1>
            )}

            {selectedMenu === "comment" &&
              !userCommentary?.[0].hasOwnProperty("message") && (
                <div className="row scroll">
                  {appendComment(userCommentary)}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
