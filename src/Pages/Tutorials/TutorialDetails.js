import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const TutorialDetails = () => {
  const selectedTutorial = useLoaderData();
  console.log(selectedTutorial);
  return (
    <div>
      <h3>Tutorial details:{selectedTutorial.title}</h3>
      <h3>Tutorial details:{selectedTutorial.id}</h3>
      <div>
        Get premium access{" "}
        <Link to={`/checkout/${selectedTutorial.id}`}>Checkout</Link>
      </div>
    </div>
  );
};

export default TutorialDetails;
