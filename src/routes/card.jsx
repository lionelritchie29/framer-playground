import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Card from '../components/Card';

export default function CardPage() {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Love For All, Hatred For None.',
      color: 'bg-red-400',
      credit: 'Khalifatul Masih III',
    },
    {
      id: 2,
      text: 'Change the world by being yourself.',
      color: 'bg-blue-400',
      credit: 'Amy Poehler',
    },
    {
      id: 3,
      text: 'Every moment is a fresh beginning.',
      color: 'bg-purple-400',
      credit: 'T.S Elliot',
    },
  ]);

  const [spareCards, setSpareCards] = useState([
    {
      id: 4,
      text: 'Aspire to inspire before we expire. ',
      color: 'bg-pink-400',
      credit: 'Unknown',
    },
    {
      id: 5,
      text: 'Whatever you do, do it well.',
      color: 'bg-green-400',
      credit: 'Walt Disney',
    },
    {
      id: 6,
      text: 'What we think, we become. ',
      color: 'bg-yellow-400',
      credit: 'Buddha',
    },
    {
      id: 7,
      text: 'All limitations are self-imposed.',
      color: 'bg-red-400',
      credit: 'Oliver Wendell Holmes',
    },
    {
      id: 8,
      text: 'Be so good they can’t ignore you.',
      color: 'bg-red-400',
      credit: 'Steve Martin',
    },
    {
      id: 9,
      text: 'And still, I rise.',
      color: 'bg-purple-400',
      credit: 'Maya Angelou',
    },
  ]);

  const add = () => {
    if (spareCards.length == 0) return;
    const index = Math.floor(Math.random() * spareCards.length);
    setCards([...cards, spareCards[index]]);
    setSpareCards(spareCards.filter((c, i) => i !== index));
  };

  const remove = (id) => {
    const removed = cards.find((c) => c.id === id);
    setCards(cards.filter((c) => c.id !== id));
    setSpareCards([...spareCards, removed]);
  };

  return (
    <div className='px-4 lg:px-0 py-8'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <AnimatePresence>
          {cards.map((card, idx) => (
            <Card remove={remove} card={card} key={idx} />
          ))}
        </AnimatePresence>
      </ul>

      {spareCards.length > 0 && (
        <div className='text-right mt-2'>
          <button
            onClick={() => add()}
            className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Add
          </button>
        </div>
      )}
    </div>
  );
}
