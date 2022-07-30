/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RecipeList() {
  return (
    <div>
      <div className="card my-3 position-relative">
        <div className="row">
          <div className="col-4">
            <img
              src="/images/satepadang.jfif"
              alt="recipe icon"
              className="w-100 h-100"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
