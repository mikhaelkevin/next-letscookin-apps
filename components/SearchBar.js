import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [valueNotValid, setValueNotValid] = useState(false);

  const router = useRouter();
  const searchSubmitted = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      setValueNotValid(true);
      return;
    }
    localStorage.setItem("search", searchValue);
    router.push("/recipe");
  };

  useEffect(() => setValueNotValid(false), []);

  return (
    <div className="col-lg-10 col-sm-10 col-10 offset-1 py-4 mb-3">
      <form onSubmit={(e) => searchSubmitted(e)}>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg defaultBox"
            placeholder="Search pasta, bread, etc"
            onChange={(e) => setSearchValue(e?.target?.value)}
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
      {valueNotValid && (
        <div className="alert alert-danger mt-3 text-center">
          Type something to search a recipe
        </div>
      )}
    </div>
  );
}
