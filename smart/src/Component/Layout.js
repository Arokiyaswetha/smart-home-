// src/components/Layout.jsx
import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import '../css/dashboard.css';
import '../App.css';
import '../css/surveillance.css';

import '../css/logs.css';


export default function Layout({ children }) {

  return (

    
    <>
     <Header />
    <div className="container dashboardContainer">
      <Sidebar />
       <main className="main dashboardMain">
        {/* <Header />     */}
        <div className="pageRender">
        <Outlet />
        </div>
        {/* {children} */}
       </main>
       </div>
     </>
  );
}
