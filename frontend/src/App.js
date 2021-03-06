import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Logout from "./views/auth/Logout";
import { Switch } from "react-router-dom";
import AdminLogin from "./components/loginAdmin/loginAdmin";
import TokenAuthentication from "./components/token/token";
import AdminTokenAuthentication from "./components/token/adminToken";
import AddCategory from "./components/add-edit-delete-category/add-edit-delete-category";
import ViewMovies from "./components/viewMovies/viewMovies";
import Ape from "./components/testusContext/test1";
import Aside from "./components/testusContext/Aside";
import Main from "./components/testusContext/Main";
import store from "./store";
import { Provider } from "react-redux";


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/logout" element={<Logout />} exact />
          <Route path="/adminLogin" element={<AdminLogin />} exact />
          <Route path="/testToken" element={<TokenAuthentication />} exact />
          <Route
            path="/adminToken"
            element={<AdminTokenAuthentication />}
            exact
          />
          <Route path="/AddCategory" element={<AddCategory />} exact />
          <Route path="/viewMovies" element={<ViewMovies />} exact />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
};

export default App;
