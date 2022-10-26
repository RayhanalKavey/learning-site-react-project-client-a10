import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h4>Accept our terms and conditions</h4>
      <p>
        Go back to <Link to={"/register"}>register</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
