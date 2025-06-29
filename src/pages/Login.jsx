import React, { useState } from 'react';
import logo from '/img/prodai.png';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ChatWindow from './ChatWindow';
import api from '../api/axiosInstance';

export default function Login() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSendOTP = async () => {
    try {
      await api.post('/v1/auth/request-otp', {
        email: "dhruvthofficial@gmail.com"
      });
      console.log("✅ OTP sent.");
    } catch (err) {
      console.error("❌ Failed to send OTP:", err);
    }
  };

  const handleVerifyOTP = async () => {
    const enteredOtp = otp.join('');
    try {
      const res = await api.post('/v1/auth/verify-otp', { otp: enteredOtp });
      const token = res.data.access_token;
      localStorage.setItem("access_token", token);
      console.log("✅ OTP Verified");
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Invalid OTP:", err);
    }
  };

  return (
    <section className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 bluebackground vh-100">
            <div className="footercopyright">© 2025 All rights reserved</div>
          </div>
          <div className="col-sm-6 loginwin">
            <div className="lang">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            <div className="logo">
              <img src={logo} className="logo react" alt="React logo" />
              <h2>Welcome to<br />ProdAI</h2>
              <p className="logosubheading">Your product's intelligent guide</p>
            </div>

            <div className="loginform">
              <form onSubmit={e => e.preventDefault()}>
                <div>
                  <label htmlFor="username">Username
                    <OverlayTrigger placement="top" overlay={<Tooltip>Enter your user name</Tooltip>}>
                      <Button><i className="bi bi-exclamation"></i></Button>
                    </OverlayTrigger>
                  </label>
                  <input type="text" name="username" />
                </div>

                <div>
                  <label htmlFor="password">Password
                    <OverlayTrigger placement="top" overlay={<Tooltip>Enter your password</Tooltip>}>
                      <Button><i className="bi bi-exclamation"></i></Button>
                    </OverlayTrigger>
                  </label>
                  <input type="password" name="password" />
                </div>

                <div className="forgetpw">
                  <Link className="linktext" to="/forgot-password"><u>Forgot Password?</u></Link>
                </div>

                <div className="otp">
                  <label>Enter OTP
                    <OverlayTrigger placement="top" overlay={<Tooltip>Enter OTP sent on Email & SMS</Tooltip>}>
                      <Button><i className="bi bi-exclamation"></i></Button>
                    </OverlayTrigger>
                  </label>
                  <div className="otpbox">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        maxLength="1"
                        value={digit}
                        onChange={e => handleChange(e, i)}
                      />
                    ))}
                  </div>
                  <div className="resendotp">
                    <button type="button" className="linktext" onClick={handleSendOTP}>
                      <u>Resend OTP?</u>
                    </button>
                  </div>
                </div>

                <button className="buttonsign" type="button" onClick={handleVerifyOTP}>
                  <span className="signinbtn">Sign In</span>
                </button>
              </form>
            </div>

            <div className="chatbotn">
              <ChatWindow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}