/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function RecipeList(props) {
  const { data } = props;
  return (
    <>
      {data?.map((recipe, index) => (
        <div className="card border-0 my-3 recipeList" key={recipe.id}>
          <div className="row">
            <div className="col-4">
              <Link href={`/recipe/${recipe.id}`}>
                <a>
                  <img
                    src={
                      recipe?.recipe_picture
                        ? recipe?.recipe_picture
                        : "images/image_notfound.png"
                    }
                    alt="recipe icon"
                    className="w-100 h-100"
                  />
                </a>
              </Link>
            </div>
            <div className="col-8">
              <div className="card-body">
                <p className="fontResponsive">{recipe.title}</p>
                <p className="subFontResponsive">
                  by {recipe.author || recipe.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
