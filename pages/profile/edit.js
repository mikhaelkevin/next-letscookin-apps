import React from "react";
import Head from "next/head";
import styles from "../../styles/EditProfile.module.css";
import Image from "next/image";
import FormProfile from "../../components/profile/FormProfile";

const EditProfile = () => {
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>

      <div className={styles.mainPage}>
        <div className={styles.topContent}>
          <button className="btn btn-ligh">
            <Image
              src="/images/back-button.svg"
              width="30px"
              height="30px"
              alt="back-button"
            />
          </button>
          <h2 className="text-center themeColor">Edit Profile</h2>
        </div>
        <div className={styles.mainContent}>
          <FormProfile />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
