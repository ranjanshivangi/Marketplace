import React from 'react';
import JobDescription from './pages/jobdescription/jobdescription.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Employees from './pages/employees/employees.jsx';
import Profile from './pages/profile/profile.jsx';
import ShortList from './pages/shortlist/shortlist.jsx';
import './App.css';
//import EditSkill from '../src/pages/editSkill/EditSkills'
import EditSkill from './components/edit/editSkill.jsx';
import EditCertificate from './components/edit/editCertificate.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import EditCourse from './components/edit/editCourse.jsx';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="view/:id" element={<JobDescription/>}></Route>
          <Route path="/employees/" element={<Employees/>}></Route>
          <Route path="/shortlist/" element={<ShortList/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
          <Route path="/profile/skill/:id" element={<EditSkill/>}></Route>
          <Route path="/profile/course/:id" element={<EditCourse/>}></Route>
          <Route path="/profile/certificate/:id" element={<EditCertificate/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}


export default App;
