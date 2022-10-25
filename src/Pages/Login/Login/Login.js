import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const { signIn, handleGoogleLogin, resetPassword } = useContext(AuthContext);

  //--1 handle login
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;

        //ParT reset user
        form.reset(user);

        //ParT login after email verification
        if (user.emailVerified) {
          toast.success(`Logged in successfully ${user?.displayName}!!`);
        } else {
          toast.error(
            "Your email is not verified !! Please verify your email address."
          );
        }
        //ParT Clear error
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //--2 Reset Pass
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Reset link has been sent, please check email");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* --1 email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={(event) => setUserEmail(event.target.value)}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      {/* --2 password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form.Group>

      {/* --3 Button */}
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Button onClick={handleReset}>Forget password</Button>
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
