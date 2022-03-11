import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const history = useHistory();
  const changePage = () => {
    history.replace("/");
  };
  const handleEmail = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    localStorage.setItem("YourEmail", e.currentTarget.value);
  };
  const handleUserName = (e: FormEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
    localStorage.setItem("YourUserName", e.currentTarget.value);
  };
  const handlePassword = (e: FormEvent<HTMLInputElement>) => {
    setPassWord(e.currentTarget.value);
    localStorage.setItem("YourPassWord", e.currentTarget.value);
  };
  const handleRegister = () => {
    if (email !== "" && passWord !== "" && userName !== "") {
      alert("Register Success !!!");
      history.replace("/");
    } else {
      alert("Failed ! Try it again !");
    }
    setEmail("");
    setUserName("");
    setPassWord("");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 150,
        }}
        className="section-register"
      >
        <div
          className=" is-justify-content-center content"
          style={{
            maxWidth: 400,
            minWidth: 399,
            minHeight: 500,
            maxHeight: 501,
            textAlign: "center",
            border: "solid 1px gray",
            padding: 25,
            borderRadius: 8,
          }}
        >
          <div className="title">
            <h1 style={{ fontSize: 40, fontWeight: 600, paddingBottom: 30 }}>
              Register
            </h1>
          </div>
          <form>
            <div className="field">
              <p className="control has">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </p>
            </div>
            <div className="field">
              <p className="control ">
                <input
                  className="input"
                  type="text"
                  placeholder="UserName"
                  value={userName}
                  onChange={handleUserName}
                  required
                />
              </p>
            </div>
            <div className="field" style={{ paddingBottom: 40 }}>
              <p className="control ">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={passWord}
                  onChange={handlePassword}
                  required
                />
              </p>
            </div>
            <button
              className="button is-primary btn-reg"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </button>
            <br></br>
            <br></br>
            <p onClick={changePage}>
              <span>Do you already have an account ? Let sign in ! </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
