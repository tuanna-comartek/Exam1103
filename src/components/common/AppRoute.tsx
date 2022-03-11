import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/loginPage/Register";
import Navigation from "../navbar/Navigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route
            path="/home"
            render={() => {
              return localStorage.getItem("accessToken") ? (
                <Navigation />
              ) : (
                <Redirect to="/Exam1103" />
              );
            }}
          ></Route>
          <Route path="/Exam1103" exact={true}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
