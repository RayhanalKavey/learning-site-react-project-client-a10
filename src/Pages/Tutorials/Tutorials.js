import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Tutorial from "./Tutorial";

const Tutorials = () => {
  const tutorials = useLoaderData();
  console.log(tutorials);
  return (
    <div>
      <div className="row">
        <div className="col-lg-4">
          <h2>React Tutorials</h2>
          <div>
            {tutorials.map((tutorial) => (
              <p key={tutorial.id}>
                {" "}
                <Link to={`/tutorial-details/${tutorial.id}`}>
                  {tutorial.title}
                </Link>
              </p>
            ))}
          </div>
        </div>
        <div className="col-lg-8">
          <h2>Tutorial Lists</h2>
          <div className="row">
            {tutorials.map((tutorial) => (
              <Tutorial
                tutorial={tutorial}
                key={tutorial?.id}
                className="col-lg-4 j"
              ></Tutorial>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
