import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import apiClient from "../services/api-client";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .post("/auth/users/activation/", {
        uid,
        token,
      })
      .then((res) => {
        console.log(res.data);
        setMessage("Account activated successfully!");
      })
      .catch((err) => {
        console.error(err);
        setError(JSON.stringify(err.message || "Account activation failed."));
      })
      .finally(() => setLoading(false));

    if (message) {
      setTimeout(() => {
        navigate("/login");
      }, 10000);
      setInterval(() => {
        setCounter((prev) => (prev >= 1 ? prev - 1 : 0));
      }, 1000);
    }
  }, [uid, token, message, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10 max-w-175 mx-auto">
        <span className="loading loading-spinner text-info h-20 w-20"></span>
      </div>
    );
  }

  return (
    <section className="my-10 mx-auto max-w-175 flex flex-col items-center justify-center">
      {message && (
        <div role="alert" className="alert alert-success w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Success! {message}</span>
        </div>
      )}

      {message && (
        <p className="mt-4 text-center text-gray-600">
          You will be redirected to the login page in{" "}
          <span className="font-bold text-2xl text-blue-600">{counter}</span>{" "}
          seconds...
        </p>
      )}

      {error && (
        <div role="alert" className="alert alert-error w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! {error}.</span>
        </div>
      )}
    </section>
  );
};

// https://localhost:5173/activate/MTE/d3n2nh-f5b4589f5158a4f39b16d25061baf55a

export default ActivateAccount;
