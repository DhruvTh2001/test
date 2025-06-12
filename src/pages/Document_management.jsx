import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table'
import userpic from '/img/userpic.png'

import Dashboard_sidebar from '../components/dashboard/Dashboard_sidebar';
import Dashboard_topbar from '../components/dashboard/Dashboard_topbar';

export default function Document_management() {


    const [file, setFile] = useState();

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


                        <section className='chatbot_doc_page'>
                            <section className='chatbot_info'>
                                <div class="container-fluid topbar">

                                    <div class="innerrow">
                                        <div class="innertopbar">
                                            <h4>Document Management</h4>
                                            <div className='btnright'>

                                                <button type="button" className='canclebtn'>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='doc_details'>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-8 ">
                                            <form className='chatbotform'>
                                                <div className='row'>
                                                    <div className='col-sm-4'>
                                                        <label htmlFor="docname">Document Name
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Document Name</Tooltip>}  >
                                                                <Button  > <i class="bi bi-exclamation"></i></Button>
                                                            </OverlayTrigger> </label>
                                                    </div>
                                                    <div className='col-sm-8'>
                                                        <input type="text" name="docname" ></input>
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-sm-4'>
                                                        <label htmlFor="avatarimg">Document Path
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Upload Document</Tooltip>}  >
                                                                <Button  > <i class="bi bi-exclamation"></i></Button>
                                                            </OverlayTrigger> </label>
                                                    </div>
                                                    <div className='col-sm-8'>
                                                        <input type="file" onChange={handleChange} />
                                                        <br /><br />
                                                        <ProgressBar animated variant="danger" now={60} />
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-sm-4'>

                                                    </div>
                                                    <div className='col-sm-8'>
                                                        <p class="uploaddocdetail">File Name: Test file</p>
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

                            <section className='chatbot_details_box'>
                                <div class="container">
                                    <div class="row">
                                        <div className="docbox">
                                            <span>Document Size</span>
                                            <p className='maindocbox'></p>
                                        </div>
                                        <div className="docbox">
                                            <span>Number of Pages</span>
                                            <p className='maindocbox'></p>
                                        </div>
                                        <div className="docbox">
                                            <span>Number of Images</span>
                                            <p className='maindocbox'></p>
                                        </div>
                                        <div className="docbox">
                                            <span>Number of Tables</span>
                                            <p className='maindocbox'></p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='chatbot_details_data'>
                                <div className="container">
                                    <div className="table-responsive">

                                        <Table table stripped tablechatbot size="sm">
                                            <thead>
                                                <tr>
                                                    <th width="50"><span>S.No.</span></th>
                                                    <th width="200"><span>Document Name</span></th>
                                                    <th width="170"><span>Original Path</span></th>
                                                    <th width="100"><span>Time Stamp</span></th>
                                                    <th width="150"><span>Meta Data</span></th>
                                                    <th width="200"><span>Uploaded by</span></th>
                                                    <th width="50"> </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> </td>
                                                    <td>
                                                        <select name="filter" className="filter">
                                                            <option>Filter</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="mercedes">Mercedes</option>
                                                            <option value="audi">Audi</option>
                                                        </select>
                                                    </td>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td>
                                                        <select name="filter" className="filter">
                                                            <option>Filter</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="mercedes">Mercedes</option>
                                                            <option value="audi">Audi</option>
                                                        </select>
                                                    </td>
                                                    <td> </td>
                                                </tr>

                                                <tr>
                                                    <td><span className='text-center'>1</span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td className='usernamepic'><img src={userpic} className="propic" alt="profile pic" /> <span>Ram Singh</span></td>
                                                    <td><span className='trashicon'><i class="bi bi-trash"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className='text-center'>2</span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td className='usernamepic'><img src={userpic} className="propic" alt="profile pic" /> <span>Ram Singh</span></td>
                                                    <td><span className='trashicon'><i class="bi bi-trash"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className='text-center'>3</span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td className='usernamepic'><img src={userpic} className="propic" alt="profile pic" /> <span>Ram Singh</span></td>
                                                    <td><span className='trashicon'><i class="bi bi-trash"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className='text-center'>4</span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td className='usernamepic'><img src={userpic} className="propic" alt="profile pic" /> <span>Ram Singh</span></td>
                                                    <td><span className='trashicon'><i class="bi bi-trash"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className='text-center'>5</span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td><span></span></td>
                                                    <td className='usernamepic'><img src={userpic} className="propic" alt="profile pic" /> <span>Ram Singh</span></td>
                                                    <td><span className='text-center'><i class="bi bi-trash"></i></span></td>
                                                </tr>



                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                            </section>

                        </section>



                    </div>
                </div>
            </div>






















        </>

    );
}
