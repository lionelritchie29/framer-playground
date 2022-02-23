import { motion, useIsPresent } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Card({ card, remove }) {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const isPresent = useIsPresent();
  const ref = useRef(null);

  const handleRemove = () => {
    const position = ref.current.getBoundingClientRect();
    setPosition(position);
    remove(card.id);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      layout
      className='relative w-60 p-3 rounded-md bg-white shadow pb-16'
      style={{
        position: !isPresent ? 'absolute' : 'relative',
        left: !isPresent ? position.left : 'auto',
        top: !isPresent ? position.top : 'auto',
      }}>
      <div className={`w-full h-36 rounded-md bg-blue-400 ${card.color}`}></div>
      <div className='mt-2'>{card.text}</div>

      <div className='absolute bottom-2 right-2'>
        <small className='block text-right mr-1'>– {card.credit}</small>
        <div className='text-right'>
          <button
            onClick={() => handleRemove()}
            className='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-1 rounded shadow-sm hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
}
