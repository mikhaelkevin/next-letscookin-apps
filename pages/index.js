import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import NewRecipe from "../components/homepage/NewRecipe";
import RecipeList from "../components/homepage/RecipeList";
import RecipeListTitle from "../components/homepage/RecipeListTitle";
import Footer from "../components/homepage/Footer";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const newRecipeResponse = await fetch(
      "http://letscookin-app.herokuapp.com/letscookinapps/recipes/new-recipe/"
    );
    const recipeList = await fetch(
      "http://letscookin-app.herokuapp.com/letscookinapps/recipes/"
    );

    const recipeListData = await recipeList?.json();
    const newRecipeData = await newRecipeResponse?.json();

    return {
      props: {
        newRecipe: newRecipeData,
        recipeList: recipeListData,
      },
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function Home(props) {
  const { newRecipe, recipeList } = props;

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className="col-lg-4 offset-lg-4 col-sm-12 col-12 mainContainer">
        <SearchBar />
        <div className={styles.newRecipeContent}>
          <h1 className="fontResponsive">New Recipes</h1>
        </div>
        <NewRecipe data={newRecipe} />
        <div className={styles.recipeContent}>
          <RecipeListTitle />
          <div>
            <RecipeList data={recipeList} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
