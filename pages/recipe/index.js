import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import RecipeList from "../../components/homepage/RecipeList";
import styles from "../../styles/SearchRecipe.module.css";

export default function DefaultRecipe() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [fetchResponse, setFetchResponse] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const backButton = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    router.back();
  };

  const fetchData = async (value) => {
    try {
      const response = await axios.get(`/api/searchRecipe`, {
        params: { searchValue: value },
      });

      setFetchResponse(response?.data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    setButtonDisabled(false);
    setIsError(false);
    const searchValue = localStorage.getItem("search");
    fetchData(searchValue);
  }, []);

  return (
    <div>
      <Head>
        <title>Recipe List</title>
      </Head>
      <div>
        <div className="pageHeader my-4 mb-3">
          <button
            className="btn btn-light"
            onClick={(e) => backButton(e)}
            disabled={buttonDisabled}
          >
            {"<"}
          </button>
          <span className="fontResponsive themeColor">Recipe List</span>
        </div>
        <div className={styles.pageDefault}>
          {isError && (
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <p className="bottomDetailNavtabFont mediumErrorFont mt-5">
                  {errorMessage}
                </p>
              </div>
            </div>
          )}
          {!isError && fetchResponse && (
            <div className={styles.recipeContent}>
              <RecipeList data={fetchResponse} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
