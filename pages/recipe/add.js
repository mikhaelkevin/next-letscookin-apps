import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const AddRecipe = () => {
  const { auth } = useSelector((state) => state);
  const router = useRouter();

  //   useEffect(() => {
  //     if (!auth.token) {
  //       router.replace("/login");
  //     }
  //   });

  return <div> AddRecipe </div>;
};

export default AddRecipe;
