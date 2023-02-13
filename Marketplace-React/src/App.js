import React from 'react';
import JobDescription from './pages/jobdescription/jobdescription.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Employees from './pages/employees/employees.jsx';
import Profile from './pages/profile/profile.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="view/:id" element={<JobDescription/>}></Route>
          <Route path="/employees/" element={<Employees/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}


export default App;
