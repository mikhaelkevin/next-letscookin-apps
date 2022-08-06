import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Profile.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/user/loginSlice";

const ProfilePage = () => {
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState({});

  const logoutClicked = async () => {
    await router.replace("/");
    dispatch(logout());
  };

  const fetchCurrentUser = async (id) => {
    try {
      const response = await axios("/api/getCurrentUser", {
        params: {
          userId: id,
        },
      });
      setCurrentUser({
        name: response?.data?.name,
        picture: response?.data?.profile_picture,
      });
      console.log("response", response);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    if (!auth?.token) {
      router.replace("/login");
    }
    fetchCurrentUser(user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.mainPage}>
        <div className={styles.topSection}>
          <Image
            src={
              currentUser?.picture
                ? currentUser?.picture
                : "/images/image_notfound.png"
            }
            width="130px"
            height="130px"
            alt="profile-picture"
          />
          <h3>{currentUser?.name}</h3>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.bottomMenu}>
            <Link href="/profile/edit">
              <a>
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src="/images/profile-user-icon.svg"
                    width="50px"
                    height="50px"
                    alt="profile-user-icon"
                  />
                  <span>Edit Profile</span>
                  <button className="btn">
                    <Image
                      src="/images/profile-arrow.svg"
                      width="50px"
                      height="50px"
                      alt="profile-arrow-icon"
                    />
                  </button>
                </div>
              </a>
            </Link>
            <Link href="/profile/my-recipe">
              <a>
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/profile-my-recipe-icon.svg"
                    width="50px"
                    height="50px"
                    alt="profile-my-recipe-icon"
                  />
                  <span>My Recipe</span>
                  <button className="btn">
                    <Image
                      src="/images/profile-arrow.svg"
                      width="50px"
                      height="50px"
                      alt="profile-arrow-icon"
                    />
                  </button>
                </div>
              </a>
            </Link>
            <div
              className="d-flex align-items-center"
              onClick={() => logoutClicked()}
            >
              <Image
                src="/images/logout.png"
                width="50px"
                height="50px"
                alt="profile-my-recipe-icon"
              />
              <span>Logout</span>
              <button className="btn">
                <Image
                  src="/images/profile-arrow.svg"
                  width="50px"
                  height="50px"
                  alt="profile-arrow-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
