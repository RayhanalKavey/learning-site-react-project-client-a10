import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Tutorial from "./Tutorial";
import "./Tutorials.css";

const Tutorials = () => {
  const tutorials = useLoaderData();
  return (
    <div className="tutorials-component py-4 pe-lg-4 px-5 px-lg-0 ">
      <div className="row">
        <aside className="col-lg-3">
          <h2 className="text-center mb-4">Tutorials Lists</h2>
          <div className="link-tutorials">
            {tutorials.map((tutorial) => (
              <Link key={tutorial.id} to={`/tutorial-details/${tutorial.id}`}>
                <div className="per-tutorial-link d-flex flex-column align-items-stretch text-center mb-3 mx-3">
                  {tutorial.title}
                </div>
              </Link>
            ))}
          </div>
        </aside>
        <section className="col-lg-9">
          <h2 className="mb-0">React Tutorials</h2>
          <div className="row">
            {tutorials.map((tutorial) => (
              <Tutorial
                tutorial={tutorial}
                key={tutorial.id}
                className="col-lg-4 j"
              ></Tutorial>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tutorials;
