import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkoutTutorial = useLoaderData();
  return (
    <div>
      <h2>This is checkout {checkoutTutorial.title}</h2>
    </div>
  );
};

export default Checkout;
