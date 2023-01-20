import React from 'react';

import Home from './components/home/home.jsx'
import Header from './components/header/header.jsx'
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
         
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
