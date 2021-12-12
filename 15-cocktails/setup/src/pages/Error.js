import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-container">
      <h1>oops!</h1>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  );
};

export default Error;
