import React, { useState, useEffect } from "react";
import InputLogin from "../../components/formInput/SignupForm";
import TokenAuthentication from "../../components/token/token";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/v1/users/testLogin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ovo je ispod data");
        console.log(data.token);

        if (data.token) {
          localStorage.clear();
          localStorage.setItem("token", data.token);
          localStorage.setItem("refreshToken", data.refreshToken);
          console.log("ovo je iznad console log");
          console.log(localStorage.token);
        } else {
          setEmail("");
          setPassword("");
          localStorage.clear();
          console.log("ovo je iznad console log");
          console.log(localStorage.setItem);
          setErrors(true);
        }
      });
  };
  useEffect(() => {
    <TokenAuthentication
      token={localStorage.token}
      refreshToken={localStorage.refreshToken}
    />;
  }, []);
  return (
    <div>
      {loading === false && <h1>Login</h1>}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
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
            label={"Your Password"}
            name={"password"}
            type={"password"}
            value={password}
            change={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default Login;
