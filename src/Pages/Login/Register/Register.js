import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  // Check if the term and conditions accepted or not
  const [acceptTerms, setAcceptTerms] = useState(false);

  // User input from the form
  const [userInformation, setUserInformation] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  // Check the errors
  const [inputErrors, setInputErrors] = useState({
    email: "",
    password: "",
  });
  ///Take information from Auth Context
  const { handleGoogleLogin } = useContext(AuthContext);

  //--1 Name change handler
  const handleNameChange = (event) => {
    setUserInformation({ ...userInformation, name: event.target.value });
  };

  //--2 Photo URL change handler
  const handlePhotoURLChange = (event) => {
    setUserInformation({ ...userInformation, photoURL: event.target.value });
  };

  //--3 email change handler
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      setInputErrors({
        ...inputErrors,
        email: "Please enter a valid email",
      });
      setUserInformation({ ...userInformation, email: "" }); //reset email if user change the correct email when typed
    } else {
      setInputErrors({
        ...inputErrors,
        email: "",
      });
      setUserInformation({ ...userInformation, email: emailValue });
    }
  };

  //--4 email change handler with errors
  const emailErrorMessage = (message) => {
    return setInputErrors({
      ...inputErrors,
      password: message,
    });
  };

  const passResetWhenNotValid = () => {
    return setUserInformation({ ...userInformation, password: "" });
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    if (!/(?=.{6,})/.test(passwordValue)) {
      emailErrorMessage("password must be 6 character");
      passResetWhenNotValid();
    } else if (!/(?=.*[a-zA-Z])/.test(passwordValue)) {
      emailErrorMessage("password should have Upper letter!!");
      passResetWhenNotValid();
    } else if (!/(?=.*[!#@$%&? "])/.test(passwordValue)) {
      emailErrorMessage("password should have special character!!");
      passResetWhenNotValid();
    } else {
      emailErrorMessage("");
      setUserInformation({ ...userInformation, password: passwordValue });
    }
  };

  //--5 Handle Terms and conditions
  const handleTermsAndConditions = (event) => {
    setAcceptTerms(event.target.checked);
  };

  //--6 Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(inputErrors.email);
    console.log(inputErrors.password);
  };
  console.log(userInformation);

  // --------------------------------------------
  return (
    <Form onSubmit={handleSubmit}>
      {/*--1 name */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={userInformation.name}
          onChange={handleNameChange}
          name="name"
          type="text"
          placeholder="Enter name"
        />
        {/* <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text> */}
      </Form.Group>

      {/*--2 Photo URL */}
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          value={userInformation.photoURL}
          onChange={handlePhotoURLChange}
          name="photoURL"
          type="text"
          placeholder="Enter photo URL"
        />
        {/* <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text> */}
      </Form.Group>

      {/*--3 Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleEmailChange}
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-danger">{inputErrors.email}</Form.Text>
      </Form.Group>

      {/*--4 password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handlePasswordChange}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Form.Text className=" text-danger">{inputErrors.password}</Form.Text>
      </Form.Group>

      {/*--5 Terms and conditions */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleTermsAndConditions}
          type="checkbox"
          label="
          Accept terms and conditions"
        />
      </Form.Group>

      {/*--6 submit */}
      <Button
        className={` ${!acceptTerms ? " btn-danger" : " btn-primary"}`}
        disabled={!acceptTerms}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      <Form.Text className="d-block mt-4 fw-bold text-center">
        Register with social accounts
      </Form.Text>
      <hr />
      <div className="d-flex gap-4 mt-3 text-center justify-content-center">
        <Button onClick={handleGoogleLogin} variant="outline-secondary">
          <FaGoogle /> Sign in with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Sign in with GitHub
        </Button>
      </div>
      <Form.Text className="d-block mt-4  text-center">
        Already have an account <Link to="/login">Login</Link>
      </Form.Text>
      <Form.Text className="d-block  mt-4 text-danger">
        email and password login error will be displayed here
      </Form.Text>
    </Form>
  );
};

export default Register;
