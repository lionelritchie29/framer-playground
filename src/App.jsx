import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

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
    {
      title: 'List',
      to: '/list',
    },
  ];

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-red-200'>
      <main className='max-w-4xl mx-auto'>
        <nav className='absolute top-8 left-8'>
          <ul className='flex space-x-4 font-medium'>
            {links.map((link) => (
              <li key={link.title}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-500 hover:text-blue-500'
                      : 'hover:text-blue-500'
                  }
                  to={link.to}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Outlet />
      </main>
    </div>
  );
}

export default App;
