import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Confetti: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; rotation: number }>>([]);

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: particle.color }}
          initial={{ 
            x: particle.x, 
            y: particle.y, 
            rotate: particle.rotation,
            opacity: 1 
          }}
          animate={{ 
            y: window.innerHeight + 100,
            rotate: particle.rotation + 360,
            opacity: 0
          }}
          transition={{ 
            duration: 3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;