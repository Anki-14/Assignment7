import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import ServiceDetails from './components/ServiceDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Navbar is always displayed */}
      <Navbar />

      {/* Page content below navbar */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route path="courses" element={<ServiceDetails service="Courses" />} />
            <Route path="placements" element={<ServiceDetails service="Placements" />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Optional Footer */}
      <Footer />
    </div>
  );
};

export default App;
