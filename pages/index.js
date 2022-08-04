import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import NewRecipe from "../components/homepage/NewRecipe";
import RecipeList from "../components/homepage/RecipeList";
import React from "react";
// import { useSelector } from "react-redux";

export const getStaticProps = async () => {
  try {
    const newRecipeResponse = await fetch(
      `${process.env.API_URL}/letscookinapps/recipes/new-recipe/`
    );
    const recipeList = await fetch(
      `${process.env.API_URL}/letscookinapps/recipes/`
    );

    const recipeListData = await recipeList?.json();
    const newRecipeData = await newRecipeResponse?.json();

    return {
      props: {
        newRecipe: newRecipeData,
        recipeList: recipeListData,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function Home(props) {
  const { newRecipe, recipeList } = props;

  React.useEffect(() => localStorage.removeItem("search"), []);

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <SearchBar />
      <div className={styles.newRecipeContent}>
        <h1 className="fontResponsive">New Recipes</h1>
      </div>
      <NewRecipe data={newRecipe} />
      <div className={styles.recipeContent}>
        <h1 className="fontResponsive">Recipes</h1>
        <div>
          <RecipeList data={recipeList} />
        </div>
      </div>
    </div>
  );
}
