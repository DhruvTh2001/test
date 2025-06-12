import React from 'react';
import logo from '/img/prodai.png'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ChatWindow from './ChatWindow';
import login from "./Login";

export default function Registration() {

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


              <div className='regform loginform'>
                <form>

                  <div className='row'>
                    <div className='col-sm-6'>
                      <label htmlFor="companyname">Company Name
                        <OverlayTrigger placement="top" overlay={<Tooltip>Enter company name</Tooltip>}  >
                          <Button  > <i class="bi bi-exclamation"></i></Button>
                        </OverlayTrigger> </label>
                      <input type="text" name="company_name" ></input>
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor="username">Username
                        <OverlayTrigger placement="top" overlay={<Tooltip>Enter user name</Tooltip>}  >
                          <Button  > <i class="bi bi-exclamation"></i></Button>
                        </OverlayTrigger> </label>
                      <input type="text" name="username" ></input>
                    </div> 
                  </div>

                  <div className='row'>
                    <div className='col-sm-6'>
                      <label htmlFor="email">eMail ID
                        <OverlayTrigger placement="top" overlay={<Tooltip>Enter eMail ID</Tooltip>}  >
                          <Button  > <i class="bi bi-exclamation"></i></Button>
                        </OverlayTrigger> </label>
                      <input type="text" name="emai" ></input>
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor="number">Phone Number
                        <OverlayTrigger placement="top" overlay={<Tooltip>Enter phone number</Tooltip>}  >
                          <Button  > <i class="bi bi-exclamation"></i></Button>
                        </OverlayTrigger> </label>
                      <input type="text" name="pnumber" ></input>
                    </div> 
                  </div>

                  <div className='row'>
                    <div className='col-sm-6'>
                      <label htmlFor="password">Password
                         </label>
                      <input type="password" name="password" ></input>
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor="repass">Re-enter Password
                         </label>
                      <input type="password" name="repassward" ></input>
                    </div> 
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 checkboxtnc'>
                       <input type="checkbox" className='signupcheck'></input> I have read and agree with the <Link to="/login"  > Term and Condition </Link> of ProdAI
                    </div>
                     
                  </div>
  
                  <input className='signinbtn signup' type="submit" value="Sign up" />
                </form>
                <div className='notaccount'>Already have an account? <Link to="/login"  > Signin </Link> </div>
              </div>
              <div className='chatbotn'> <ChatWindow/></div>
            </div>
           
          </div>
        </div>

      </section>


    </>

  );
}
