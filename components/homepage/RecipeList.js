/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function RecipeList(props) {
  const { data } = props;
  return (
    <>
      {data.map((recipe, index) => (
        <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
          {/* <a style={{ textDecoration: "none", color: "black" }}> */}
          <div className="card border-0 my-3 recipeList">
            <div className="row">
              <div className="col-4">
                <img
                  src={
                    recipe?.recipe_picture
                      ? recipe?.recipe_picture
                      : "images/image_notfound.png"
                  }
                  alt="recipe icon"
                  className="w-100 h-100"
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <p className="fontResponsive">{recipe.title}</p>
                  <p className="subFontResponsive">by {recipe.author}</p>
                </div>
              </div>
            </div>
          </div>
          {/* </a> */}
        </Link>
      ))}
    </>
  );
}
