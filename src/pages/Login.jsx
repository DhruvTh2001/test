import React from 'react';
import logo from '/img/prodai.png'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
 
import Registraion from "./Registration";
import ChatWindow from './ChatWindow';

export default function Login() {
 
  return (

    <>
      <section className='login'>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 bluebackground vh-100">
              <div className='footercopyright'>© 2025 All rights reserved</div>
            </div>
            <div class="col-sm-6 loginwin">

              <div className='lang'>
<select  >
                <option>English</option>
                  <option>Hindi</option>
            </select>
             

              </div>

              <div className='logo'>
                <img src={logo} className="logo react" alt="React logo" />
                <h2>Welcome to<br></br>
                  ProdAI</h2>
                <p className='logosubheading'>Your product's intelligent guide</p>
              </div>

              
              <div className='loginform'>
                <form>

                  <div><label htmlFor="username">Username  
                    <OverlayTrigger placement="top" overlay={<Tooltip>Enter your user name</Tooltip>}  >
                <Button  > <i class="bi bi-exclamation"></i></Button>
              </OverlayTrigger> </label>
                    <input type="text" name="username" ></input>
                  </div>
                  <div><label htmlFor="password">Password
                    <OverlayTrigger placement="top" overlay={<Tooltip>Enter your password</Tooltip>}  >
                <Button  > <i class="bi bi-exclamation"></i></Button>
              </OverlayTrigger>
                  </label>
                    <input type="password" name="password" ></input>
                  </div>
                  <div className='forgetpw'><Link className='linktext'  to = "/forgot-password"  ><u>Forgot Password?</u></Link></div>



                  <div className='otp'>
                    <label htmlFor="opt">Enter OTP 
                    <OverlayTrigger placement="top" overlay={<Tooltip>Enter OTP sent on Email & SMS </Tooltip>} >
                <Button  > <i class="bi bi-exclamation"></i></Button>
              </OverlayTrigger></label>                    
                    <div className='otpbox'>
                    <input type="text" name="otp1" ></input>
                    <input type="text" name="otp2" ></input>
                    <input type="text" name="otp3" ></input>
                    <input type="text" name="otp4" ></input>
</div>

                    <div className='resendotp'><Link className='linktext'  to = "#"  ><u>Resend OTP?</u></Link></div>
                  </div>



                 <button className='buttonsign' type="submit">  <Link className='signinbtn'  to = "/dashboard"  > Sign In </Link></button>
                  
                </form>
 {/*<div className='notaccount'>Not having account? <Link to = "/reg"  > Sign Up </Link> </div>*/}
              </div>
<div className='chatbotn'> <ChatWindow/></div>
            </div>
          </div>
        </div>

      </section>


    </>

  );
}
