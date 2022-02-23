import { motion } from 'framer-motion';
import { useState } from 'react';

export default function IndexPage() {
  const texts = { hover: 'Hover me', tap: 'Tap me', drag: 'Drag me' };
  const [text, setText] = useState(texts.hover);

  return (
    <div>
      <motion.div
        drag
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.5 }}
        onHoverStart={() => setText(texts.tap)}
        onHoverEnd={() => setText(texts.hover)}
        onTapStart={() => setText(texts.drag)}
        onDragEnd={() => setText(texts.tap)}
        dragConstraints={{
          top: -100,
          bottom: 100,
          left: -100,
          right: 100,
        }}
        whileDrag={{
          rotate: '180deg',
          borderRadius: '100px',
        }}
        whileTap={{
          scale: 1,
        }}
        className='bg-red-500 text-white w-36 h-36 flex cursor-pointer justify-center items-center font-semibold rounded-md'>
        {text}
      </motion.div>
    </div>
  );
}
