import React from "react";
import styles from "../styles/Register.module.css";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.topBackButton}>
        <button className="btn btn-light btn-lg d-flex align-items-center">
          <Image
            src="/images/arrow-left.svg"
            width="25%"
            height="25%"
            alt="back-button"
          />
        </button>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className={styles.registerTitle}>
          <h3 className="themeColor">{"Let's Get Started!"}</h3>
          <span className="text-secondary">
            Create new account to access all features
          </span>
        </div>
        <div className={styles.registerForm}>
          <RegisterForm />
          <p className="text-center mt-3 text-secondary">
            {"Already have account? "}
            <Link href="/login">
              <a className="themeColor">Log in here</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
