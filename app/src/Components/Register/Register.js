import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fullnameReg, setFullnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/v1/auth/register", {
        fullName: fullnameReg,
        email: emailReg,
        password: passwordReg,
      });
      
      // Registration successful
      navigate("/login");
    } catch (error) {
      if (error.response?.data?.code === 'EMAIL_EXISTS') {
        setError("An account with this email already exists");
      } else {
        setError("Failed to create an account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register weather container">
      <h1 className="title is-size-1">Register</h1>

      {error && (
        <div className="notification is-danger">
          {error}
        </div>
      )}

      <form onSubmit={register}>
        <div className="field">
          <label className="label">Full Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="fullname"
              required
              value={fullnameReg}
              onChange={(e) => setFullnameReg(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              required
              value={emailReg}
              onChange={(e) => setEmailReg(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="password"
              required
              minLength="6"
              value={passwordReg}
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button 
              className={`button is-link ${loading ? 'is-loading' : ''}`} 
              type="submit"
              disabled={loading}
            >
              Register
            </button>
          </div>
          <div className="control">
            <button 
              className="button is-link is-light" 
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
