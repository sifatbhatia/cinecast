import React, { useState, setStatus } from "react";
import "./Register.css";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
  const history = useNavigate();
  const [status, setStatus] = useState(undefined);
  const [fullnameReg, setFullnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = (e) => {
   
    Axios.post("https://filtherv2.herokuapp.com//api/v1/register", {
      fullName: fullnameReg,
      email: emailReg,
      password: passwordReg,
    }).then(() => {
      setStatus({ type: 'success' });
    })
    .catch((error) => {
      setStatus({ type: 'error', error });
    });
  };

  return (
    <>
    {status?.type === 'success' && <p>"Registeration success!"</p>} 
      {status?.type === 'error' && (
        <p>"User already exists"</p>
      )}
      <div className="register weather container">
      <h1 className="title is-size-1">Register</h1>

      <div className="field">
        <label className="label">Full Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="fullname"
            onChange={(e) => {
              setFullnameReg(e.target.value);
            }}
          />
        </div>
      </div>
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

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={register}>
           
            Register

          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={ (e) => {e.preventDefault(); history.push('/login')}}>Login</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Register;
