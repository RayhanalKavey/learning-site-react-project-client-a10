import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "./TutorialDetails.css";
const TutorialDetails = () => {
  const ref = useRef();
  const selectedTutorial = useLoaderData();
  const { title, img, details } = selectedTutorial;
  return (
    <section className="tutorial-container h-100 ">
      <div className="w-75  d-flex flex-column mx-auto py-5 color-text">
        <div className="d-flex justify-content-between mb-5 ">
          <h3 className=" ">{title}</h3>
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-primary custom-button">
                Download PDF
              </button>
            )}
            content={() => ref.current}
          ></ReactToPrint>
        </div>
        <img className="rounded rounded-4 w-75 mx-auto" src={img} alt="" />
        <div ref={ref} className="download">
          <h3 className="mt-5 ">Area Covered</h3>
          <p>{details}</p>
          <div className="mb-3">
            {details.map((detail, idx) => (
              <li key={idx} className="ms-4">
                {detail}
              </li>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column  ps-3">
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
