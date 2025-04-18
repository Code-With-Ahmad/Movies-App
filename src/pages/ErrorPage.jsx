import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="grid place-content-center mt-[100px] text-center">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        The page you are looking for does not exist. Please check the URL or go
        back to the homepage.
      </p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
