import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";

const FormProfile = () => {
  const { user, token } = useSelector((state) => state?.auth);
  const router = useRouter();

  const [oldData, setOldData] = useState({});
  const [loadGet, setLoadGet] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [picture, setPicture] = useState({});

  const fetchUserData = async (userId) => {
    try {
      setIsError(false);
      setLoadGet(true);
      const response = await axios("/api/getCurrentUser", {
        params: {
          userId,
        },
      });
      setOldData(response?.data);
      setLoadGet(false);
    } catch (error) {
      setIsError(true);
      setMessage(
        error?.response?.data?.mesage ||
          error?.response?.data ||
          "Something wrong with fetching data"
      );
    }
  };

  const requestPatchUser = async (e) => {
    try {
      setIsSuccess(false);
      setIsError(false);
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phoneNumber", phonenumber);
      formData.append("profilePicture", picture);
      formData.append("id", user.id);

      const response = await axios.patch(
        `${process.env.CLIENT_API_URL}/letscookinapps/users`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsSuccess(true);
      setMessage(response?.data?.message);
      setTimeout(() => router.replace("/profile"), 3000);
    } catch (error) {
      setIsError(true);
      setMessage(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    setIsSuccess(false);
    setIsError(false);
    fetchUserData(user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isError && (
        <div className="alert alert-danger text-center">{message}</div>
      )}

      {isSuccess && (
        <div className="alert alert-success text-center">
          <div>
            <span>{message} Please wait, redirecting to profile page...</span>
          </div>
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
        </div>
      )}
      <form onSubmit={(e) => requestPatchUser(e)}>
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text w-100 h-100" id="name-box">
              <Image
                src="/images/user.svg"
                width="30px"
                height="30px"
                alt="user-icon"
              />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder={loadGet ? "Loading..." : oldData?.name}
            disabled={loadGet}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text w-100 h-100" id="email-box">
              <Image
                src="/images/mail.svg"
                width="30px"
                height="30px"
                alt="mail-icon"
              />
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder={loadGet ? "Loading..." : oldData?.email}
            disabled={loadGet}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text w-100 h-100" id="phone-box">
              <Image
                src="/images/phone.svg"
                width="30px"
                height="30px"
                alt="phone-icon"
              />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder={loadGet ? "Loading..." : oldData?.phonenumber}
            disabled={loadGet}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text w-100 h-100" id="profile-pic-box">
              <Image
                src="/images/picture.svg"
                width="30px"
                height="30px"
                alt="profile-pic-icon"
              />
            </span>
          </div>
          <input
            type="file"
            className="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            disabled={loadGet}
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-warning btn-lg w-50"
            disabled={isSuccess || !Object.keys(oldData).length}
          >
            EDIT
          </button>
        </div>
      </form>
    </>
  );
};

export default FormProfile;
