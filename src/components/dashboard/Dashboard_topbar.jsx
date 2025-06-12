import React from 'react';
import userpic from '/img/userpic.png'
import { Link } from "react-router-dom"; 
import Navbar from './navbar';

export default function Dashboard_topbar() {


    return (

        <>

            <div className='dashboardtopbar'>
                <div className='companyname'>Prod AI</div>
                <div className='top-right'>
                    <a href="#" class="notification">
                        <span><i class="bi bi-bell"></i></span>
                        <span class="badge">3</span>
                    </a>
                    <div className='username'><img src={userpic} className="propic" alt="profile pic" /><span>Dr. Sanjeev K Yadav</span> </div>



                    <div class="dropdown dashboardright">
                        <div class="dropbtn"><i class="bi bi-three-dots-vertical"></i></div>
                        <div class="dropdown-content">
                            <Link to="#"  ><span><i class="bi bi-person-fill"></i></span> Profile Up </Link>
                            <Link to="#"  ><span><i class="bi bi-gear-fill"></i></span> Preferences </Link>
                            <Link to="#"  ><span><i class="bi bi-person-raised-hand"></i></span> Help </Link>
                            <Link to="#"  ><span><i class="bi bi-envelope"></i></span> Contact Us </Link>
                            <Link to="#"  ><span><i class="bi bi-info-lg"></i></span> About BidCatalist </Link>
                            <Link to="/login"  ><span><i class="bi bi-box-arrow-right"></i></span> Logout </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menu_section'>
               <Navbar/>

            </div>

        </>

    );
}
