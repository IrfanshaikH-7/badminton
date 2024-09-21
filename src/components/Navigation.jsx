// src/components/Navigation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import grassland from '../assets/bg.jpg';
import badminton_ground from '../assets/badminton_ground.jpg';
import badminton_ground_open from '../assets/badminton_ground_open.jpg';


const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (bgImage) => {
    navigate('/play', { state: { bgImage } });
  };

  return (
    <div className="flex flex-col items-start w-full mx-auto max-w-xl justify-center h-screen">
      <h1 className="text-2xl mb-4">Choose a theme</h1>
      <button onClick={() => handleNavigation('')} className="p-2 m-2 bg-blue-500 text-white rounded">default</button>
      <button onClick={() => handleNavigation(grassland)} className="p-2 m-2 bg-green-500 text-white rounded">Grassland</button>
      <button onClick={() => handleNavigation(badminton_ground)} className="p-2 m-2 bg-red-500 text-white rounded">badminton ground</button>
      <button onClick={() => handleNavigation(badminton_ground_open)} className="p-2 m-2 bg-cyan-500 text-white rounded">badminton ground open</button>
    </div>
  );
};

export default Navigation;
