import React from "react";

export default function Navtab(props) {
  const [ingredientsIsActive, setIngredientsIsActive] =
    React.useState("active");
  const [videosIsActive, setVideosIsActive] = React.useState("");
  const [commentIsActive, setCommentIsActive] = React.useState("");

  const { menu } = props;

  const menuSelector = (menuTitle) => {
    if (menuTitle === "ingredients") {
      menu(menuTitle);
      setIngredientsIsActive("active");
      setVideosIsActive("");
      setCommentIsActive("");
    }

    if (menuTitle === "videos") {
      menu(menuTitle);
      setVideosIsActive("active");
      setIngredientsIsActive("");
      setCommentIsActive("");
    }

    if (menuTitle === "comment") {
      menu(menuTitle);
      setCommentIsActive("active");
      setIngredientsIsActive("");
      setVideosIsActive("");
    }
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          className={`nav-link bottomDetailNavtabFont ${ingredientsIsActive}`}
          onClick={() => menuSelector("ingredients")}
        >
          Ingredients
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link bottomDetailNavtabFont ${videosIsActive}`}
          onClick={() => menuSelector("videos")}
        >
          Videos
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link bottomDetailNavtabFont ${commentIsActive}`}
          onClick={() => menuSelector("comment")}
        >
          Comment
        </a>
      </li>
    </ul>
  );
}
