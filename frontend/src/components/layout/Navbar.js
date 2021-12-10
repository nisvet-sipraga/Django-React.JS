import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <nav>
      <h1>Django React Auth</h1>
      <ul>
        {isAuth === true ? (
          <Fragment>
            {" "}
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/addArticle">Wiew all movies</Link>
            </li>
            <li>
              <Link to="/testToken">tesToken</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
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
              <Link to="/testToken">tesToken</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
