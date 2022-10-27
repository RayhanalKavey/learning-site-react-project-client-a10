import React from "react";
import { Link } from "react-router-dom";
import "./Tutorial.css";

const Tutorial = ({ tutorial }) => {
  const { title, description, img } = tutorial;
  return (
    <div className="custom-card col-lg-6 col-xl-4 g-4">
      <Link key={tutorial.id} to={`/tutorial-details/${tutorial.id}`}>
        <div className="col ">
          <div className="card card-style">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body c-body">
              <h5 className="card-title fs-3 mb-4">{title}</h5>
              <p className="card-text ">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Tutorial;
