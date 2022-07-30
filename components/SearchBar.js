import React from "react";
import Image from "next/image";

export default function SearchBar() {
  const searchClicked = (e) => {
    e.preventDefault();
    console.log("Search form is clicked");
  };

  return (
    <div className="col-lg-10  col-sm-10 col-10 offset-1 py-4 mb-3">
      <form onSubmit={(e) => searchClicked(e)}>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg defaultBox fontResponsive"
            placeholder="Search pasta, bread, etc"
          />
          <button type="submit" className="input-group-text defaultBox">
            <Image
              src="/images/magnify.svg"
              width="50px"
              height="35px"
              alt="Search Icon"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
