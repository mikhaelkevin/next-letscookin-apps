import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import NewRecipe from "../components/homepage/NewRecipe";
import RecipeList from "../components/homepage/RecipeList";
import RecipeListTitle from "../components/homepage/RecipeListTitle";
import Image from "next/image";

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
        <footer className="row fixedFooter ">
          <div className="col-3">
            <Image
              src="/images/home.svg"
              width="30vw"
              height="30vh"
              alt="HomeMenuIcon"
            />
          </div>
          <div className="col-3">
            <Image
              src="/images/plus-square.svg"
              width="30vw"
              height="30vh"
              alt="HomeMenuIcon"
            />
          </div>
          <div className="col-3">
            <Image
              src="/images/message-circle.svg"
              width="30vw"
              height="30vh"
              alt="HomeMenuIcon"
            />
          </div>
          <div className="col-3">
            <Image
              src="/images/user.svg"
              width="30vw"
              height="30vh"
              alt="HomeMenuIcon"
            />
          </div>
        </footer>
        {/* <footer className="footer fixedFooter ">dsadasdasdasds</footer> */}
      </div>
    </div>
  );
}
