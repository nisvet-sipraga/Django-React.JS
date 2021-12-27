import React, { useState, useEffect } from "react";
import InputLogin from "../../components/formInput/SignupForm";
import PropTypes from "prop-types";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Tokenn } from "../../components/loginAdmin/loginAdmin";
import TokenAuthentication from "../../components/token/token";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      username: username,
      password: password,
    };
    console.log(email);
    console.log(username);
    console.log(password);

    console.log("ovo je ispod cons usera");
    console.log(user);
    fetch("http://127.0.0.1:8000/api/v1/backend_react/testRegister/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token && data.refreshToken) {
          localStorage.clear();
          localStorage.setItem("token", data.token);
          localStorage.setItem("refreshToken", data.refreshToken);
          window.location.replace("http://localhost:3000/");
        } else {
          setEmail("");
          setusername("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      {loading === false && <h1>Signup</h1>}
      {errors === true && <h2>Your input is incorrect </h2>}
      <form onSubmit={onSubmit}>
        <InputLogin
          label={"Your Email"}
          name={"email"}
          type={"email"}
          value={email}
          change={(e) => setEmail(e.target.value)}
        />
        <br />
        <InputLogin
          label={"Your Username"}
          name={"username"}
          type={"username"}
          value={username}
          change={(e) => setusername(e.target.value)}
        />
        <br />
        <InputLogin
          label={"Your Password"}
          name={"password"}
          type={"password"}
          value={password}
          change={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
