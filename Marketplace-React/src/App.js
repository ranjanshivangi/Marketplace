import React from 'react';

import Home from './pages/home/home.jsx';
import JobDescription from './pages/jobdescription/jobdescription.jsx';

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
          <Route path="/" element={<Home/>}></Route>
          <Route path="/view" element={<JobDescription/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
