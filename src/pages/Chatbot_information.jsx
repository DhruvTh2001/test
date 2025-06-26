import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import Dashboard_sidebar from '../components/dashboard/Dashboard_sidebar';
import Dashboard_topbar from '../components/dashboard/Dashboard_topbar';


export default function Chatbot_information() {


  const [file, setFile] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (

    <>
      <div class="dashboard_wrapper">
        <div class="wrapper">

          <Dashboard_sidebar />

          <div class="content">
            <div className='dashbartop-fix'>
              <Dashboard_topbar />
            </div>









            <section className='chatbot_info'>
              <div class="container-fluid topbar">
                <div class="innerrow">
                  <div class="innertopbar">
                    <h4>Chatbot Information</h4>
                    <div className='btnright'>
                      <button type="button" className='savebtn'>Save</button>
                      <button type="button" className='canclebtn' onClick={() => navigate('/dashboard')}>Close</button>

                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='chatbot_details'>
              <div class="container">
                <div class="row">
                  <div class="col-sm-8 ">
                    <form className='chatbotform'>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="chatbotname">Chatbot Name
                            <OverlayTrigger placement="top" overlay={<Tooltip>Chatbot Name</Tooltip>}  >
                              <Button  > <i class="bi bi-exclamation"></i></Button>
                            </OverlayTrigger> </label>
                        </div>
                        <div className='col-sm-8'>
                          <input type="text" name="chatbotname" ></input>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="avatarimg">Chatbot Avatar Image
                            <OverlayTrigger placement="top" overlay={<Tooltip>Chatbot Avatar Image</Tooltip>}  >
                              <Button  > <i class="bi bi-exclamation"></i></Button>
                            </OverlayTrigger> </label>
                        </div>
                        <div className='col-sm-8'>
                          <input type="file" onChange={handleChange} />

                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="lang">Default Language
                            <OverlayTrigger placement="top" overlay={<Tooltip>Default Language</Tooltip>}  >
                              <Button  > <i class="bi bi-exclamation"></i></Button>
                            </OverlayTrigger> </label>
                        </div>
                        <div className='col-sm-8'>
                          <select className='defaultlang'>
                            <option>English</option>
                            <option>Hindi</option>
                          </select>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="onboaring">Welcome / Onboarding Message </label>
                        </div>
                        <div className='col-sm-8'>
                          <textarea type="text" className='onboardmsg'></textarea>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="onboaring">Fallback / Default Responses</label>
                        </div>
                        <div className='col-sm-8'>
                          <textarea type="text" className='response'></textarea>
                        </div>
                      </div>


                    </form>
                  </div>
                  <div class="col-sm-4 ">
                    {file && <img className='previewimg' src={file} alt="Uploaded preview" />}
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>


    </>

  );
}
