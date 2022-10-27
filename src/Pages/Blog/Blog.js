import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog-container py-4 px-5">
      <h2 className="text-center mb-4">Some Basic Concepts About REACT</h2>
      <div className="mb-5 ">
        <h5 className="mb-3">Q. What is cors?</h5>
        <p className="ms-4">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div className="mb-5 ">
        <h5 className="mb-3">
          Q. Why are you using firebase? What other options do you have to
          implement for authentication?{" "}
        </h5>
        <p className="ms-4">
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
        <p className="ms-4">Top Alternatives to Firebase Authentication:</p>
        <p className="ms-4">
          <li>
            Auth0: A set of unified APIs and tools that instantly enables Single
            Sign On and user management to all your applications
          </li>
          <li>
            MongoDB: MongoDB stores data in JSON-like documents that can vary in
            structure, offering
          </li>
          <li> Passport</li>
          <li>Okta. </li>
          <li>Firebase</li>
          <li>JSON Web</li>
          <li>Toke.</li>
          <li>Keycloak</li>
          <li>Amazon Cognito</li>
        </p>
      </div>
      <div className="mb-5 ">
        <h5 className="mb-3">Q. How does private route works?</h5>
        <p className="ms-4">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div className="mb-5 ">
        <h5 className="mb-3">Q. What is node? How does node work?</h5>
        <p className="ms-4">
          Image result for What is node? How does node work? Node. js is an
          open-source, cross-platform JavaScript runtime environment and library
          for running web applications outside the client's browser. Ryan Dahl
          developed it in 2009, and its latest iteration, version 15.14, was
          released in April 2021
        </p>
        <p className="ms-4">
          Node allows developers to write JavaScript code that runs directly in
          a computer process itself instead of in a browser. Node can,
          therefore, be used to write server-side applications with access to
          the operating system, file system, and everything else required to
          build fully-functional applications.
        </p>
      </div>
    </div>
  );
};

export default Blog;
