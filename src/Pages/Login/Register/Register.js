import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Register = () => {
  // Check if the term and conditions accepted or not
  const [acceptTerms, setAcceptTerms] = useState(false);
  //Handle Terms and conditions
  const handleTermsAndConditions = (event) => {
    // console.log(event.target.checked);
    setAcceptTerms(event.target.checked);
  };
  // User input from the form
  const [userInformation, setUserInformation] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });
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
    setUserInformation({ ...userInformation, email: event.target.value });
  };
  //email change handler
  const handlePasswordChange = (event) => {
    setUserInformation({ ...userInformation, password: event.target.value });
  };
  // console.log(userInformation);
  // console.log(acceptTerms);
  return (
    <Form>
      {/* name */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={userInformation.name}
          onChange={handleNameChange}
          type="text"
          placeholder="Enter name"
        />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>
      {/* Photo URL */}
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          value={userInformation.photoURL}
          onChange={handlePhotoURLChange}
          type="text"
          placeholder="Enter photo URL"
        />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>
      {/* Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={userInformation.email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {/* password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={userInformation.password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      {/* Terms and conditions */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleTermsAndConditions}
          type="checkbox"
          label="
          Accept terms and conditions"
        />
      </Form.Group>
      {/* submit */}
      <Button
        className={` ${!acceptTerms ? " btn-danger" : " btn-primary"}`}
        disabled={!acceptTerms}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default Register;
