import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import NewRecipe from "../components/homepage/NewRecipe";
import RecipeList from "../components/homepage/RecipeList";
import RecipeListTitle from "../components/homepage/RecipeListTitle";
import Footer from "../components/homepage/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className="col-lg-4 offset-lg-4 col-sm-12 col-12">
        <SearchBar />
        <div className={styles.newRecipeContent}>
          <h1 className="fontResponsive">New Recipes</h1>
        </div>
        <NewRecipe />
        <div className={styles.recipeContent}>
          <RecipeListTitle />
          <div>
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
