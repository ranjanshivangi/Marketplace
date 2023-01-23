import React from 'react';
import JobDescription from './pages/jobdescription/jobdescription.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './pages/Dashboard/dashboard.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/view" element={<JobDescription/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
