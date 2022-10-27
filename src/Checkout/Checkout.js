import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Checkout.css";
const Checkout = () => {
  const checkoutTutorial = useLoaderData();

  return (
    <div className="checkout-container text-center">
      <h2 className="py-5">{checkoutTutorial.title}</h2>

      <h3 className="vh-100">
        Premium content on{" "}
        <span className="fw-bold">"{checkoutTutorial.title}"</span> coming soon
        !!!
      </h3>
    </div>
  );
};

export default Checkout;
