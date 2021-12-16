import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import TokenAuthentication from "../token/token";


const ViewMovies = () => {
  return (
        <div>
            <TokenAuthentication/>
        <h1> this is page od viewMovies </h1>
    
        </div>
      );


}



export default ViewMovies;









