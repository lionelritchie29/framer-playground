import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const links = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Card',
      to: '/card',
    },
  ];

  return (
    <div className='w-full h-screen flex justify-center items-center bg-red-200'>
      <nav className='fixed top-8 left-8'>
        <ul className='flex space-x-4 font-medium'>
          {links.map((link) => (
            <li key={link.title}>
              <Link className='hover:text-blue-500' to={link.to}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
