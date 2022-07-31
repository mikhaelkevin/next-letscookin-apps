import React from "react";
import Link from "next/dist/client/link";

export default function RecipeListTitle() {
  return (
    <div className="row">
      <div className="col-6 d-flex align-items-center">
        <h1 className="fontResponsive">Recipes</h1>
      </div>
      <div className="col-6 recipeListLink">
        <Link href="#/">
          <a>
            <h3 className="fontResponsive">{"More Info"}</h3>
          </a>
        </Link>
      </div>
    </div>
  );
}
