import React from "react";
import Header from "../../components/header/header";
import Home from "../../components/home/home.jsx";
import './dashboard.scss'

function Dashboard() {
  
  return <>
    <div className="dashcontainer">
      <Header />
      <Home />
    </div>
  </>
}

export default Dashboard;