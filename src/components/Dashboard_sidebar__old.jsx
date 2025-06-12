 
import { Link } from "react-router-dom"; 
import logo from '/img/prodai.png'
import userpic from '/img/userpic.png'  

export default function Dashboard() {


    return (

        <>
            <div class="dashboard_wrapper">
                <div class="wrapper">

                    <nav class="sidebar d-flex flex-column">
                        <div class="sidebar-header">
                            <div className='dashboardlogo'>
                                <img src={logo} className="dashboardlogo" alt="logo" />
                                <span>ProdAI</span>
                            </div>
                        </div>

                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-house-door-fill"></i><span class="ms-2">Home</span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-columns-gap"></i><span class="ms-2">Customer Onboarding</span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-filetype-doc"></i><span class="ms-2">Document Management</span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-gear-wide-connected"></i><span class="ms-2">Chatbot Configuration</span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-people-fill"></i><span class="ms-2">User Management </span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-person-fill-gear"></i><span class="ms-2">Role and Permission</span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-clipboard2-data"></i><span class="ms-2">Integration Configuration</span></a>
                         
                        <Link className="nav-link px-3 py-2" to = "/dashboard"  ><i class="bi bi-bookmark-dash-fill"></i><span class="ms-2">Dashboard</span></Link>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-chat-right-dots"></i><span class="ms-2">Conversation History</span></a>
                        <a href="#" class="nav-link px-3 py-2"><i class="bi bi-circle-square"></i><span class="ms-2">Conversation Analysis</span></a>

                        {/* <div class="has-submenu">
                            <a href="#" class="nav-link px-3 py-2"><i class="fas fa-cogs"></i><span class="ms-2">Settings</span></a>
                            <div class="submenu">
                                <a href="#" class="nav-link px-3 py-2">General</a>
                                <a href="#" class="nav-link px-3 py-2">Profile</a>
                            </div>
                            </div>*/
                        }


                    </nav>


                    <div class="content">
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
                                        <Link to="#"  ><span><i class="bi bi-box-arrow-right"></i></span> Logout </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

 
                    </div>
                </div>
            </div>
        </>

    );
}
