/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RecipeList(props) {
  const { data } = props;
  return (
    <div>
      {data.map((recipe) => (
        <div className="card my-3 recipeList" key={recipe.id}>
          <div className="row">
            <div className="col-4">
              <img
                src={
                  recipe?.recipe_picture
                    ? recipe?.recipe_picture
                    : "images/image_notfound"
                }
                alt="recipe icon"
                className="w-100 h-100"
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h1 className="fontResponsive">{recipe.title}</h1>
                <h4 className="fontResponsive">{recipe.author}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
