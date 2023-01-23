import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Home from './components/home/home.jsx';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
