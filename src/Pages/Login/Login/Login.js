import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
const Login = () => {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  // --1 email input
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };

  // --2 password input
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
  };

  // //--3 handle login
  // const handleLogin = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const userInfo = userCredential.user;
  //       setUser(userInfo);
  //       // console.log(usernf);
  //       toast.success("You are successfully logged in !!");
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // };

  return (
    <Form>
      {/* --1 email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handleEmailChange}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      {/* --2 password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onBlur={handlePasswordChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* --3 Button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
