import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginRequest = async (e) => {
    setIsSuccess(false);
    setIsError(false);
    try {
      e.preventDefault();
      const response = await axios.post("/api/login", { email, password });
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err?.response?.data?.message);
    }
  };

  return (
    <>
      {isError && (
        <div className="alert alert-danger text-center">{errorMessage}</div>
      )}
      {isSuccess && (
        <div className="alert alert-success text-center">
          Login success! Redirecting to homepage, please wait ...
        </div>
      )}
      <form onSubmit={(e) => loginRequest(e)}>
        <div className="input-group input-group-lg mb-4">
          <span className="input-group-text" id="email-box">
            <Image
              src="/images/user.svg"
              width="25%"
              height="25%"
              alt="LoginUserIcon"
            />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="example@gmail.com"
            aria-label="E-mail"
            aria-describedby="email-box"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="password-box">
            <Image
              src="/images/lock.svg"
              width="25%"
              height="25%"
              alt="LoginUserIcon"
            />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Type your password here"
            aria-label="password"
            aria-describedby="password-box"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-end">
          <a className="text-secondary">Forgot password?</a>
        </p>
        <button className="btn btn-warning btn-lg w-100" disabled={isSuccess}>
          LOG IN
        </button>
      </form>
    </>
  );
}
