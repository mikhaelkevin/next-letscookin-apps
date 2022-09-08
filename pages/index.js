/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import NewRecipe from "../components/homepage/NewRecipe";
import RecipeList from "../components/homepage/RecipeList";
import React from "react";

export const getStaticProps = async (req, res) => {
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
      revalidate: 30,
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function Home(props) {
  const { newRecipe, recipeList } = props;
  const totalRecipes = recipeList?.length;

  const [showData, setShowData] = React.useState(5);
  const [dataSorting, setDataSorting] = React.useState('ASC');
  const [recipeData, setRecipeData] = React.useState(recipeList?.slice(0, showData));

  React.useEffect(() => {
    localStorage.removeItem("search")
  }, []);
  
  React.useEffect(() => {
    console.log('recipeList', recipeList)
    setRecipeData(recipeList?.slice(0, showData))
    if(dataSorting === 'ASC'){
      recipeList?.sort((a,b) => a?.title > b?.title ? 1 : -1)
    }
    
    if(dataSorting === 'DESC'){
      recipeList?.sort((a,b) => b?.title > a?.title ? 1 : -1)
    }
  } , [dataSorting, showData])


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
      <div className={styles.recipeListTitle}>
        <h1 className="fontResponsive">Recipes</h1>
        <label htmlFor="sortBy">
          Sort By {' '}
        <select name="sortBy" id="sortBy" onChange={(e) => setDataSorting(e?.target?.value)}>
          <option hidden/>
          <option value="ASC">A - Z</option>
          <option value="DESC">Z - A</option>
        </select>
        </label>
      </div>
        <div className="mb-3">
          <RecipeList data={recipeData} sort={dataSorting} />
        </div>
        <div className="row d-flex justify-content-center mb-2">
          {showData < totalRecipes && <button type="button" className="btn btn-primary w-50" onClick={() => setShowData(showData+5)}>Load more</button>}
          {showData >= totalRecipes && <p className="text-center text-muted fst-italic">End of recipe list</p>}
        </div>
      </div>
    </div>
  );
}
