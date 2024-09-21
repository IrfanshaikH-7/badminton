import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import shuttleImg from '../assets/shuttle.png';

const BadmintonShuttlecock = () => {
  const [position, setPosition] = useState('left');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const randomizePosition = () => {
      setPosition(Math.random() > 0.5 ? 'left' : 'right');
      setIsAnimating(true);

      setTimeout(() => setIsAnimating(false), 1700); 
    };

    // random interval b/w 2 to 5s
    const intervalId = setInterval(randomizePosition, Math.random() * (5000 - 2000) + 2000);

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    hidden: {
      scale: 0, 
      rotate: 0, 
      opacity: 0.4, 
    },
    visible: {
      scale: [0, 1.2, 1], 
      rotate: [0, 10, -10, 0], 
      opacity: 1, 
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5, 
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen relative overflow-hidden">
      <AnimatePresence>
        {isAnimating && (
          <motion.img
            src={shuttleImg}
            alt="Shuttlecock"
            className={`absolute h-72 w-72 object-contain ${position === 'left' ? 'left-0' : 'right-0'}`} // Fixed left or right position
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit" 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BadmintonShuttlecock;
