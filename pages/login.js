import React from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.mainPage}>
        <div className="row d-flex justify-content-center">
          <div className={styles.userLoginIcon}>
            <Image
              src="/images/user.svg"
              width="100%"
              height="100%"
              alt="LoginUserIcon"
              priority={true}
            />
          </div>
          <div className={styles.loginTitle}>
            <h3 className="themeColor">Welcome!</h3>
            <span className="disableTextColor">
              Log in to your existing account.
            </span>
          </div>
          <div className={styles.loginInputBox}>
            <LoginForm />
            <p className="text-center mt-3 text-secondary">
              {"Don't have an account? "}
              <Link href="/register">
                <a className="themeColor">Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
