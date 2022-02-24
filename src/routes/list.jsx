import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function ListPage() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Pay Netflix',
      done: false,
    },
    {
      id: 2,
      title: 'Learn Wordpress',
      done: false,
    },
    {
      id: 3,
      title: 'Read a Book',
      done: false,
    },
    {
      id: 4,
      title: 'Wash Bottle',
      done: true,
    },
    {
      id: 5,
      title: 'Work Out',
      done: false,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const parentVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <div>
      <div className='mb-4'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='button'>
          {isOpen ? 'Close' : 'Open'} Todo
        </button>
      </div>

      <motion.div
        variants={parentVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}>
        <motion.ul variants={variants} className='flex flex-col space-y-2  '>
          {todos.map((todo) => {
            return (
              <motion.li
                variants={itemVariants}
                key={todo.id}
                className='cursor-pointer w-60 rounded-md p-2 bg-white shadow'>
                <div className='block justify-between flex'>
                  <span className='block'>{todo.title}</span>
                  <span>
                    <motion.input
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                      checked={todo.done}
                      type='checkbox'
                      className='cursor-pointer'
                    />
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
}
