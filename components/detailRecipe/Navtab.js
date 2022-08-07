import React from "react";
import { useSelector } from "react-redux";

export default function Navtab(props) {
  const { token } = useSelector((state) => state?.auth);

  const [ingredientsIsActive, setIngredientsIsActive] =
    React.useState("active");
  const [videosIsActive, setVideosIsActive] = React.useState("");
  const [commentIsActive, setCommentIsActive] = React.useState("");
  const [addCommentActive, setAddCommentActive] = React.useState("");

  const { menu } = props;

  const menuSelector = (menuTitle) => {
    if (menuTitle === "ingredients") {
      menu(menuTitle);
      setIngredientsIsActive("active");
      setVideosIsActive("");
      setCommentIsActive("");
      setAddCommentActive("");
    }

    if (menuTitle === "videos") {
      menu(menuTitle);
      setVideosIsActive("active");
      setIngredientsIsActive("");
      setCommentIsActive("");
      setAddCommentActive("");
    }

    if (menuTitle === "comment") {
      menu(menuTitle);
      setCommentIsActive("active");
      setIngredientsIsActive("");
      setVideosIsActive("");
      setAddCommentActive("");
    }

    if (menuTitle === "add comment" && token) {
      menu(menuTitle);
      setAddCommentActive("active");
      setCommentIsActive("");
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

      {token && (
        <li className="nav-item">
          <a
            className={`nav-link bottomDetailNavtabFont ${addCommentActive}`}
            onClick={() => menuSelector("add comment")}
          >
            Add Comment
          </a>
        </li>
      )}
    </ul>
  );
}
