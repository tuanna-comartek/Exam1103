import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
// import RegisterPage from "../register/Register";
// import LinkRegisterPage from "../register/Register";
import car from "../../asset/images/pngwing.com.png";
import Title from "./AnimationTitle";

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
        style={{ overflow: "hidden" }}
      >
        <div className="row area">
          <div className=" col-lg-7 content-left">
            <div className="content-left-contents">
              <Title />
              <img
                className="car-car"
                src={car}
                alt="car"
                width="40px"
                style={{ marginBottom: -29 }}
              />
              <hr></hr>
              <img
                src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/262141941_2070026886498321_1295285670256650488_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8631f5&_nc_ohc=03eWqtsIAnQAX8fuRmd&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-5O6WxKHsE68x176ui6_7QZiZPWbAMeeeD0a7L_Z5HxQ&oe=622F840C"
                alt="Comartek.com"
                width="100%"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 100,
              paddingBottom: 150,
            }}
            className="login-form col-lg-5"
          >
            <form>
              <div
                className=" is-justify-content-center content"
                style={{
                  maxWidth: 400,
                  minWidth: 399,
                  minHeight: 500,
                  maxHeight: 501,
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
                      paddingBottom: 80,
                      color: "#fff",
                    }}
                  >
                    Login
                  </h1>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={changeTextEmail}
                      required
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={changeTextPassword}
                      required
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
