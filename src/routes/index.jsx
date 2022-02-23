import { motion } from 'framer-motion';

export default function IndexPage() {
  return (
    <motion.div
      drag
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.5 }}
      whileDrag={{
        rotate: '180deg',
        borderRadius: '100px',
      }}
      whileTap={{
        scale: 1,
      }}
      className='bg-red-500 text-white w-36 h-36 flex cursor-pointer justify-center items-center font-semibold rounded-md'>
      Red Box
    </motion.div>
  );
}
