import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/navbar';
import Plants from './components/Plants';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
<Route path="/tasks" element={<Tasks />} />
           </Routes>
         </main>
       </div>
    </Router>
  );
};

export default App;

