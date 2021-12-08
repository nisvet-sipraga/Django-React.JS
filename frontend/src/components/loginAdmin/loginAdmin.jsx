import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    
        const user = {
          email: email,
          password: password,
        };
        console.log(email)
        console.log(password)
    
        console.log("ovo je ispod cons usera");
        console.log(user);
        fetch("http://127.0.0.1:8000/api/v1/users/adminLogin/", {
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
              setPassword("");
              localStorage.clear();
            }
          });
      };

      return (
        <div>
          <form onSubmit={onSubmit}>
            <br /><br/>
            <InputLogin  label={"Your Email"} name={"email"} type={"email"} value={email} change={(e) => setEmail(e.target.value)}/>
            <br />
            <InputLogin  label={"Your Password"} name={"password"} type={"password"} value={password} change={(e) => setPassword(e.target.value)}/>
            <br />
            <input type="submit" value="Signup" />
          </form>
        </div>
      );


}

export default AdminLogin