import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Courses and Placements</h1>
    
      <nav>
        <NavLink to="courses" className="course-heading">Courses</NavLink> 
        <NavLink to="placements" className="placement-heading">Placements</NavLink> 
      </nav>
      <Outlet />
    

      

     
    </div>
  );
};

export default Services;
