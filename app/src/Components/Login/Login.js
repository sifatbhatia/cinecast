import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";
function Login() {
  const [status, setStatus] = useState(undefined);
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const history = useHistory();
  const redirect = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/v1/login", {
      email: emailReg,
      password: passwordReg,
    })
      .then((response) => {
        setStatus({ type: "success" });
        console.log(response.data.message)
        localStorage.setItem("userName", response.data.message);
        history.push("/home");
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };

  return (
    <>
      {status?.type === "success" && <p>"Login success!"</p>}
      {status?.type === "error" && <p>"User doesn't exist"</p>}
      <div className="register weather container">
        <h1 className="title is-1">Login</h1>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              class="input"
              type="password"
              name="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link is-dark" onClick={redirect}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
