// src/components/Layout.jsx
import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import '../css/dashboard.css';
import '../App.css';
export default function Layout({ children }) {
  return (
    <>
    <div className="container dashboardContainer">
      <Sidebar />
       <main className="main dashboardMain">
        <Header />
        <div className="pageRender">
        <Outlet />
        </div>
        {/* {children} */}
       </main>
       </div>
     </>
  );
}
