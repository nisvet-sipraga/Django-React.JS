import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthAdmin, setIsAuthAdmin] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null ||
      localStorage.getItem("refreshToken") !== null
    ) {
      setIsAuth(true);
      setIsAuthAdmin(false);
      if (localStorage.getItem("adminToken") !== null) {
        setIsAuthAdmin(true);
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth) {
    return (
      <Fragment>
        {" "}
        <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/viewMovies">Wiew all movies</Link>
          </li>
        </ul>
      </Fragment>
    );
  } else if (isAuthAdmin) {
    return (
      <Fragment>
        {" "}
        <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/addCategory">AddCategory</Link>
          </li>
        </ul>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {" "}
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/adminLogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/testToken">UserToken</Link>
          </li>
          <li>
            <Link to="/adminToken">adminToken</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
};

export default Navbar;
