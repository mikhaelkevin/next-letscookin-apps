import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../../styles/AddRecipe.module.css";
import Head from "next/head";
import AddForm from "../../components/addRecipe/AddForm";

const AddRecipe = () => {
  const { auth } = useSelector((state) => state);
  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!auth.token) {
      router.replace("/login");
    }
  });

  return (
    <>
      <Head>
        <title>Add Recipe</title>
      </Head>
      <div className={styles.mainPage}>
        <h3 className="themeColor text-center pt-4">Add your recipe</h3>

        {isError && (
          <div className="alert alert-danger text-center mt-4">{message}</div>
        )}
        {isSuccess && (
          <div className="alert alert-success text-center mt-4">
            {message} Please wait, redirecting to homepage...
          </div>
        )}

        <AddForm
          data={{ auth, isSuccess }}
          setter={(object) => {
            setIsSuccess(object.successStatus);
            setIsError(object.errorStatus);
            setMessage(object.message);
            console.log(object);
          }}
        />
      </div>
    </>
  );
};

export default AddRecipe;
