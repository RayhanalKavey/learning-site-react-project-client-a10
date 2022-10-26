import React from "react";
import { Link } from "react-router-dom";

const Tutorial = ({ tutorial }) => {
  return (
    <div className="col-lg-4">
      <Link to={`/tutorial-details/${tutorial.id}`}>
        <div className=" border border-3">
          <h2>{tutorial?.title}</h2>
          <p>{tutorial?.description}</p>
          <p>{tutorial?.id}</p>
        </div>
      </Link>
    </div>
  );
};

export default Tutorial;
