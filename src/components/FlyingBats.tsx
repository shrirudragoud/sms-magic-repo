import React from 'react';

const FlyingBats: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fly-bat"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            transform: `scale(${0.2 + Math.random() * 0.5})`,
          }}
        >
          <img
            src="https://www.svgrepo.com/show/200464/bat.svg"
            alt="Flying Bat"
            className="w-6 h-6 sm:w-8 sm:h-8 filter invert opacity-40 select-none"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
};

export default FlyingBats;