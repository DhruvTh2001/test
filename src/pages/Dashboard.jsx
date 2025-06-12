import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from '/img/prodai.png'

import Dashboard_page from './Dashboard_page';

import Dashboard_sidebar from '../components/dashboard/Dashboard_sidebar';
import Dashboard_topbar from '../components/dashboard/Dashboard_topbar';

export default function Dashboard() {


    return (

        <>
            <div class="dashboard_wrapper">
                <div class="wrapper">

                    <Dashboard_sidebar />

                    <div class="content">
                        <div className='dashbartop-fix'>
                        <Dashboard_topbar />
                        </div>
                        <Dashboard_page />
                    </div>
                </div>
            </div>
        </>

    );
}
