import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
// import RegisterPage from "../register/Register";
// import LinkRegisterPage from "../register/Register";
import car from "../../asset/images/pngwing.com.png";
import Title from "./AnimationTitle";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import LoginPageFormik from "./LoginPageFormik";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const changePage = () => {
    history.replace("/register");
  };
  const changeTextEmail = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const changeTextPassword = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleLogin = () => {
    console.log(localStorage.YourEmail);
    if (
      email === localStorage.YourEmail &&
      password === localStorage.YourPassWord
    ) {
      localStorage.setItem("accessToken", "Key");
      alert(`Login Success !!! Well come : ${localStorage.YourUserName} `);
      history.replace("/home");
    } else {
      alert("Email or Password was wrong !!!");
    }
  };
  return (
    <>
      <div
        className="container-fluid section-login "
        style={{ overflow: "hidden", height: "100%" }}
      >
        <div className="row area" style={{ height: "100%" }}>
          <div className=" col-lg-7 content-left" style={{ minHeight: 700 }}>
            <div className="content-left-contents" style={{ height: 520 }}>
              <Title />
              <img
                className="car-car"
                src={car}
                alt="car"
                width="40px"
                style={{ marginBottom: -29 }}
              />
              <hr></hr>
              <h3 style={{ textAlign: "center", paddingBottom: 20 }}>
                Sign In With
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="section-btn"
              >
                <div
                  style={{ display: "inline-grid", width: "80%" }}
                  className="btn"
                >
                  <button
                    style={{
                      marginBottom: 10,
                      width: "100%",
                      borderRadius: 20,
                      backgroundColor: "#4267B2",
                      border: "1px solid transparent",
                      height: 35,
                    }}
                  >
                    <FaFacebookF style={{ color: "#fff" }} />
                  </button>
                  <button
                    style={{
                      marginBottom: 10,
                      width: "100%",
                      borderRadius: 20,
                      backgroundColor: "#1DA1F2",
                      border: "1px solid transparent",
                      height: 35,
                    }}
                  >
                    <IoLogoTwitter style={{ color: "#fff" }} />
                  </button>
                  <button
                    style={{
                      marginBottom: 10,
                      width: "100%",
                      borderRadius: 20,
                      backgroundColor: "#DB4437",
                      border: "1px solid transparent",
                      height: 35,
                    }}
                  >
                    <FaGoogle style={{ color: "#fff" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              minHeight: 700,
            }}
            className="login-form col-lg-5"
          >
            {/* <form style={{ height: 520 }}>
              <div
                className=" is-justify-content-center content"
                style={{
                  height: "100%",
                  textAlign: "center",
                  padding: 25,
                  borderRadius: 8,
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: 40,
                      fontWeight: 600,
                      paddingBottom: 60,
                    }}
                  >
                    Login
                  </h1>
                </div>
                <div className="field">
                  <label>User Name</label>
                  <p className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={changeTextEmail}
                      required
                      style={{ padding: "0 20px" }}
                    />
                  </p>
                </div>
                <div className="field">
                  <label>PassWord</label>
                  <p className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={changeTextPassword}
                      required
                      style={{ padding: "0 20px" }}
                    />
                  </p>
                </div>
                <br></br>
                <button
                  className="button btn-login"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <br></br>
                <br></br>
                <p onClick={changePage} style={{ cursor: "pointer" }}>
                  <span>Do you already have an account ? Let sign up ! </span>
                </p>
              </div>
            </form> */}
            <LoginPageFormik />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
