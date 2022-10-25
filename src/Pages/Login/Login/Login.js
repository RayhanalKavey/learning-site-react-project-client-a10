import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
const Login = () => {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { signIn, handleGoogleLogin } = useContext(AuthContext);

  // --1 email input
  const handleEmailChange = (event) => {
    setUserInformation({ ...userInformation, email: event.target.value });
  };

  // --2 password input
  const handlePasswordChange = (event) => {
    setUserInformation({ ...userInformation, password: event.target.value });
  };

  //--3 handle login
  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(userInformation?.email, userInformation?.password)
      .then((result) => {
        const user = result.user;
        toast.success(`Logged in successfully ${user?.displayName}!!`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        <Form.Text className="text-muted">{error}</Form.Text>
      </Form.Group>

      {/* --3 Button */}
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Form.Text className="d-block mt-4 fw-bold text-center">
        Log in with social accounts
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
        Not register yet! Please <Link to="/register">Register</Link>
      </Form.Text>
    </Form>
  );
};

export default Login;
