import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";

const TokenAuthentication = ({value}) => {
    let values = value
    let valuess = "ovojevaluesss"
    const [token1, setEmail] = useState("");
    
    console.log("ovo je token sa logina na odvojenom")
    console.log(token1)
    console.log(values)
    console.log(valuess)
    
    useEffect(() => {
      setEmail(values)
      console.log(token1);
    }, []);
    return (

    <main>
    </main>

    );

}

TokenAuthentication.propTypes = {
    value: PropTypes.string,

}
export default TokenAuthentication 


