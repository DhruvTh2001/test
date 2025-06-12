 
import { Link } from "react-router-dom";
import logo from '/img/prodai.png' 



export default function Dashboard_sidebar() {


    return (

        <>

            <nav class="sidebar d-flex flex-column">
                <div class="sidebar-header">
                    <div className='dashboardlogo'>
                        <img src={logo} className="dashboardlogo" alt="logo" />
                        <span>ProdAI</span>
                    </div>
                </div>

                <Link  to="#" class="nav-link px-3 py-2"><i class="bi bi-house-door-fill"></i><span class="ms-2">Home</span></Link>
                <Link  to="#" class="nav-link px-3 py-2"><i class="bi bi-columns-gap"></i><span class="ms-2">Customer Onboarding</span></Link>
                <Link to="/doc-management" className="nav-link px-3 py-2"><i class="bi bi-filetype-doc"></i><span class="ms-2">Document Management</span></Link>
                <Link  to="/chatbot-info" class="nav-link px-3 py-2"><i class="bi bi-gear-wide-connected"></i><span class="ms-2">Chatbot Configuration</span></Link>
                <Link  to="#" class="nav-link px-3 py-2"><i class="bi bi-people-fill"></i><span class="ms-2">User Management </span></Link>
                <Link  to="#" class="nav-link px-3 py-2"><i class="bi bi-person-fill-gear"></i><span class="ms-2">Role and Permission</span></Link>
                <Link  to="#" class="nav-link px-3 py-2"><i class="bi bi-clipboard2-data"></i><span class="ms-2">Integration Configuration</span></Link>

                <Link to="/dashboard"   className="nav-link px-3 py-2" ><i class="bi bi-bookmark-dash-fill"></i><span class="ms-2">Dashboard</span></Link>
                <Link href="#" class="nav-link px-3 py-2"><i class="bi bi-chat-right-dots"></i><span class="ms-2">Conversation History</span></Link>
                <Link href="#" class="nav-link px-3 py-2"><i class="bi bi-circle-square"></i><span class="ms-2">Conversation Analysis</span></Link>

                {/* <div class="has-submenu">
                        <a href="#" class="nav-link px-3 py-2"><i class="fas fa-cogs"></i><span class="ms-2">Settings</span></a>
                        <div class="submenu">
                            <a href="#" class="nav-link px-3 py-2">General</a>
                            <a href="#" class="nav-link px-3 py-2">Profile</a>
                        </div>
                        </div>*/
                }


            </nav>

        </>

    );
}
