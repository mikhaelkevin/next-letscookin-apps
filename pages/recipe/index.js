import React from "react";
import Head from "next/head";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/homepage/Footer";

export default function DefaultRecipe() {
  return (
    <div>
      <Head>
        <title>Recipe List</title>
      </Head>
      <div>
        <div className="row mt-3">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <div className="btn btn-light">{"<"}</div>
          </div>
          <div className="col-9 d-flex justify-content-start align-items-center px-5">
            <h2>Recipe List</h2>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
        <Footer />
      </div>
    </div>
  );
}
