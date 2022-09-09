import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [revealPassword, setRevealPassword] = useState("password");
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const requestRegister = async (e) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setPasswordStatus(false);
      e.preventDefault();
      if (password !== rePassword) {
        setPasswordStatus(true);
        setErrorMessage("Password doesn't match!");
        return;
      }
      const data = { name, email, phone, password };
      await axios.post("/api/register", data);
      setIsSuccess(true);
      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setErrorMessage(error?.response?.data);
    }
  };

  return (
    <>
      {passwordStatus || isError ? (
        <div className="alert alert-danger text-center">{errorMessage}</div>
      ) : null}

      {isSuccess && (
        <div className="alert alert-success text-center">
          Register successfuly! Redirecting to login page, please wait...
        </div>
      )}
      <form onSubmit={(e) => requestRegister(e)}>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="name-box">
            <Image
              src="/images/user.svg"
              width="25%"
              height="25%"
              alt="LoginUserIcon"
            />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="name"
            aria-describedby="name-box"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="email-box">
            <Image
              src="/images/mail.svg"
              width="25%"
              height="25%"
              alt="LoginUserIcon"
            />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail"
            aria-label="email"
            aria-describedby="email-box"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="phone-box">
            <Image
              src="/images/phone.svg"
              width="25%"
              height="25%"
              alt="LoginUserIcon"
            />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            aria-label="phone"
            aria-describedby="phone-box"
            onChange={(e) => setPhone(e.target.value)}
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
            type={revealPassword}
            className="form-control"
            placeholder="Create new password"
            aria-label="password"
            aria-describedby="password-box"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="re-password-box">
            <Image
              src="/images/unlock.svg"
              width="25%"
              height="25%"
              alt="LoginUserIcon"
            />
          </span>
          <input
            type={revealPassword}
            className="form-control defaultInputBox"
            placeholder="Re-type password"
            aria-label="re-password"
            aria-describedby="re-password-box"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <h5 className="text-end">
          <a
            onClick={() => {
              revealPassword === "password"
                ? setRevealPassword("text")
                : setRevealPassword("password");
            }}
          >
            Reveal password
          </a>
        </h5>
        <button
          className="btn btn-warning btn-lg w-100 mt-4"
          disabled={isLoading}
        >
          REGISTER
        </button>
      </form>
    </>
  );
}
