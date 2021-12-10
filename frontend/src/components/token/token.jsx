import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from "react";


const TokenAuthentication = ({token , refreshToken} ) => {
    const [email, setEmail] = useState("");
    console.log("ovo je token sa logina na odvojenom")
    console.log(token)
    const user = {
        email1: email,
      };
    console.log("ovo je ispod user")
    console.log(user)
 

    return (
      <div>
        <form
         value={token}
         onChange={(e) => setEmail(e.target.value)}
        >{" "}
        </form>
     


      </div>
    );

}

TokenAuthentication.propTypes = {
    token: PropTypes.string,
    refreshToken: PropTypes.string,
}
export default TokenAuthentication 


