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
    <div className='w-full min-h-screen flex justify-center items-center bg-red-200'>
      <main className='max-w-4xl mx-auto'>
        <nav className='absolute top-8 left-8'>
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
      </main>
    </div>
  );
}

export default App;
