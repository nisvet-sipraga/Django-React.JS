import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Logout from "./views/auth/Logout";
import { Switch } from "react-router-dom";
import AdminLogin from "./components/loginAdmin/loginAdmin";
import TokenAuthentication from "./components/token/token";
import AddCategory from "./components/addMovies/addMovies";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/logout" element={<Logout />} exact />
          <Route path="/adminLogin" element={<AdminLogin />} exact />
          <Route path="/testToken" element={<TokenAuthentication />} exact />

          <Route path="/addMovies" element={<AddCategory />} exact />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
