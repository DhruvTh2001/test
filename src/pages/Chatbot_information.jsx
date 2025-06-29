import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Dashboard_sidebar from '../components/dashboard/Dashboard_sidebar';
import Dashboard_topbar from '../components/dashboard/Dashboard_topbar';

export default function Chatbot_information() {
  const [file, setFile] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  const handleSave = async () => {
    const payload = {
      name: document.querySelector('input[name="chatbotname"]').value,
      avatar_url: file || "",
      default_language: document.querySelector('select.defaultlang').value,
      onboarding_message: document.querySelector('.onboardmsg').value,
      fallback_response: document.querySelector('.response').value
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chatbot/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log("✅ Server response:", data.message);

      // Optional: Navigate on success or show notification
      // navigate('/dashboard');
    } catch (error) {
      console.error("❌ Error saving chatbot info:", error);
    }
  };

  return (
    <>
      <div className="dashboard_wrapper">
        <div className="wrapper">
          <Dashboard_sidebar />
          <div className="content">
            <div className="dashbartop-fix">
              <Dashboard_topbar />
            </div>

            <section className='chatbot_info'>
              <div className="container-fluid topbar">
                <div className="innerrow">
                  <div className="innertopbar">
                    <h4>Chatbot Information</h4>
                    <div className='btnright'>
                      <button type="button" className='savebtn' onClick={handleSave}>Save</button>
                      <button type="button" className='canclebtn' onClick={() => navigate('/dashboard')}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='chatbot_details'>
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 ">
                    <form className='chatbotform'>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="chatbotname">Chatbot Name
                            <OverlayTrigger placement="top" overlay={<Tooltip>Chatbot Name</Tooltip>} >
                              <Button><i className="bi bi-exclamation"></i></Button>
                            </OverlayTrigger>
                          </label>
                        </div>
                        <div className='col-sm-8'>
                          <input type="text" name="chatbotname" />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="avatarimg">Chatbot Avatar Image
                            <OverlayTrigger placement="top" overlay={<Tooltip>Chatbot Avatar Image</Tooltip>} >
                              <Button><i className="bi bi-exclamation"></i></Button>
                            </OverlayTrigger>
                          </label>
                        </div>
                        <div className='col-sm-8'>
                          <input type="file" onChange={handleChange} />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="lang">Default Language
                            <OverlayTrigger placement="top" overlay={<Tooltip>Default Language</Tooltip>} >
                              <Button><i className="bi bi-exclamation"></i></Button>
                            </OverlayTrigger>
                          </label>
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
                          <label htmlFor="onboarding">Welcome / Onboarding Message </label>
                        </div>
                        <div className='col-sm-8'>
                          <textarea type="text" className='onboardmsg'></textarea>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-4'>
                          <label htmlFor="fallback">Fallback / Default Responses</label>
                        </div>
                        <div className='col-sm-8'>
                          <textarea type="text" className='response'></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-4 ">
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