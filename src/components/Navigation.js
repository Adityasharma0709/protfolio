import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import '../css/Navigation.css'
function Navigation() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

export default Navigation;