import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function DefaultRecipe() {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const backButton = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    router.back();
  };

  useEffect(() => {
    setButtonDisabled(false);
  }, []);

  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Recipe List</title>
      </Head>
      <div>
        <div className="row mt-3">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <button
              className="btn btn-light"
              onClick={(e) => backButton(e)}
              disabled={buttonDisabled}
            >
              {"<"}
            </button>
          </div>
          <div className="col-9 d-flex justify-content-start align-items-center px-5">
            <h2>Recipe List</h2>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
}
