import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./TutorialDetails.css";
const TutorialDetails = () => {
  const selectedTutorial = useLoaderData();
  const { title, img, details } = selectedTutorial;
  return (
    <section className="tutorial-container h-100 ">
      <div className="w-75  d-flex flex-column mx-auto py-5 color-text">
        <h3 className="text-center mb-5 ">{title}</h3>
        <img className="rounded rounded-4 w-75 mx-auto" src={img} alt="" />
        <div>
          <h3 className="mt-5 ">Area Covered</h3>
          <p>{details}</p>
          <div className="mb-3">
            {details.map((detail) => (
              <li className="ms-4">{detail}</li>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column ">
          <h3 className="">Want to get premium access!!</h3>
          <Link to={`/checkout/${selectedTutorial.id}`}>
            <button className="btn btn-primary custom-button text-uppercase">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TutorialDetails;
