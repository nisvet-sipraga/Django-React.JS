import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";

const AdminTokenAuthentication = () => {
    useEffect(() => {

      fetch("http://127.0.0.1:8000/api/v1/users/testToken/")
        .then(res => res.json())
        .then((result) => {
            let token = result.token
            let refreshtoken = result.refreshToken
            let adminToken = result.adminToken
            console.log(token)
            console.log(localStorage.token)
            console.log(refreshtoken)
            console.log(localStorage.refreshToken)
            console.log(adminToken)
            console.log(localStorage.adminToken)
            if (adminToken === localStorage.adminToken ){
                if((refreshtoken === localStorage.refreshToken) || (token === localStorage.token)){
                   
                }
                else{
                  window.location.replace("http://localhost:3000/adminLogin");
                }
               
            }
            else{
              window.location.replace("http://localhost:3000/adminLogin");
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


export default AdminTokenAuthentication 


