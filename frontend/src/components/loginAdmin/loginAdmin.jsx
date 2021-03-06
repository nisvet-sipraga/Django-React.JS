import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";
import TokenAuthentication from "../token/token";
import { useDispatch } from "react-redux";
import { setUser } from "../../views/auth/store/actions";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";





const AdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token , setToken] = useState("");
    const [refreshToken] = useState("ovojeprosljdeniRefresToken");
    const dispatch  = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
    
        const user = {
          email: email,
          password: password,
        };
        console.log(email)
        console.log(password)
        fetch("http://127.0.0.1:8000/api/v1/backend_react/testLogin/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            
          } ) 
          .then((res) => res.json())
          .then((data) => {
            if (data.token && data.refreshToken && data.adminToken) {
              console.log("ovo je data")
              console.log(data)
              localStorage.clear();
              localStorage.setItem("token", data.token);
              localStorage.setItem("refreshToken", data.refreshToken);
              localStorage.setItem("adminToken", data.adminToken);
              dispatch(setUser(data))
              navigate('/addCategory');
              
            } else {
              setEmail("");
              setPassword("");
              localStorage.clear();

            }
          });
      };

      console.log("ovo se dispecuje")
      const userStore = useSelector(store => store.userStore);
      console.log(userStore.token)

      


      return (
        <div>

        <h1>Admin Login</h1>
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



export default AdminLogin;









