import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";

const TokenAuthentication = () => {
    const [token, setToken] = useState("");
    console.log("ovo je token sa page")
    console.log(token)
    useEffect(() => {

      fetch("http://127.0.0.1:8000/api/v1/backend_react/testToken/")
        .then(res => res.json())
        .then((result) => {
            let token = result.token
            let refreshtoken = result.token
            setToken(token);
            console.log("ovo je ispod items")
            console.log(token)
            console.log(localStorage.token)
            if (token === localStorage.token || refreshtoken === localStorage.refreshToken){
 
            }
            else{
              window.location.replace("http://localhost:3000/login");
            }
           },
          

        )
        .catch((error) => {
          console.log("imate problem");
          console.log(error.status)
          console.log("iznad je error response status")
        });
    }, []);
    return (

    <main>
    </main>

    );

}


export default TokenAuthentication 


