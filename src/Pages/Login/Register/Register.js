import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../../Context/AuthProvider";
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

  // Check the input errors
  const [inputErrors, setInputErrors] = useState({
    email: "",
    password: "",
  });

  ///Take information from Auth Context
  const { googleLogin, createUser, updateUserProfile, setUserInfo, userInfo } =
    useContext(AuthContext);

  //------------- redirect user
  const navigate = useNavigate();
  //------------- user location where they want to go
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Name change handler
  const handleNameChange = (event) => {
    setUserInformation({ ...userInformation, name: event.target.value });
  };

  //Photo URL change handler
  const handlePhotoURLChange = (event) => {
    setUserInformation({ ...userInformation, photoURL: event.target.value });
  };

  //email change handler
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

  //email change handler with errors
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

  // Handle Terms and conditions
  const handleTermsAndConditions = (event) => {
    setAcceptTerms(event.target.checked);
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = userInformation?.name;
    // const photoURL = userInformation?.photoURL;
    // const email = userInformation?.email;
    // const password = userInformation?.password;
    const name = form?.name.value;
    const photoURL = form?.photoURL?.value;
    const email = form?.email.value;
    const password = form?.password.value;
    createUser(email, password)
      .then((result) => {
        // User create here
        const user = result.user;
        toast.success("User cleated successfully.");
        setUserInfo(user);
        //- reset user
        form.reset();
        //Navigate user to the desired path
        navigate(from, { replace: true });
        //Update user

        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //  update user when cheating.// we also update using this in the profile
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // useEffect(() => {
  //   if (userInfo?.uid) {
  //     handleUpdateUserProfile(userInformation?.name, userInformation?.photoURL);
  //   }
  // }, [userInfo]);

  // console.log(userInformation);

  // --------------------------------------------
  return (
    <div className="form-position d-flex align-items-center-center justify-content-center ">
      <Form className="c-form p-5 mt-5 w-50" onSubmit={handleSubmit}>
        <Form.Text className="d-block fw-bold fs-3  text-center form-text">
          Not Register Yet!
        </Form.Text>
        {/*--1 name */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            name="name"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        {/*--2 Photo URL */}
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            onChange={handlePhotoURLChange}
            name="photoURL"
            type="text"
            placeholder="Enter photo URL"
          />
        </Form.Group>

        {/*--3 Email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailChange}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-danger  ms-2">
            {inputErrors.email}
          </Form.Text>
        </Form.Group>

        {/*--4 password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className=" text-muted">Password</Form.Label>
          <Form.Control
            onChange={handlePasswordChange}
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <Form.Text className=" text-danger ms-2 ">
            {inputErrors.password}
          </Form.Text>
        </Form.Group>

        {/*--5 Terms and conditions */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-muted"
            onClick={handleTermsAndConditions}
            type="checkbox"
            label={
              <>
                Accept{" "}
                <Link to={"/terms-and-conditions"}>terms and conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>

        {/*--6 submit */}
        <Button
          className={` ${
            !acceptTerms
              ? "  btn-danger submit-custom-button"
              : " btn-primary custom-button"
          }`}
          disabled={!acceptTerms}
          type="submit"
        >
          Submit
        </Button>

        <Form.Text className="d-block mt-4  text-center text-muted">
          Already have an account <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;
