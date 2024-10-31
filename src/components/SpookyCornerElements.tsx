import React from 'react';

const SpookyCornerElements: React.FC = () => {
  return (
    <>
      {/* Top Left Corner */}
      <div className="absolute -top-12 -left-12 w-32 h-32 pointer-events-none z-10">
        <img
          src="https://www.svgrepo.com/show/200476/ghost-halloween.svg"
          alt="Spooky Ghost"
          className="w-16 h-16 absolute filter invert opacity-40"
          style={{
            animation: 'spookyFloat 3s ease-in-out infinite',
            '--rotation': '-15deg'
          } as React.CSSProperties}
          draggable="false"
        />
        <img
          src="https://www.svgrepo.com/show/200481/spider-halloween.svg"
          alt="Spider"
          className="w-8 h-8 absolute top-16 left-16 filter invert opacity-30"
          style={{
            animation: 'spookyFloat 4s ease-in-out infinite',
            animationDelay: '1s',
            '--rotation': '10deg'
          } as React.CSSProperties}
          draggable="false"
        />
      </div>

      {/* Top Right Corner */}
      <div className="absolute -top-12 -right-12 w-32 h-32 pointer-events-none z-10">
        <img
          src="https://www.svgrepo.com/show/200467/witch-hat-halloween.svg"
          alt="Witch Hat"
          className="w-16 h-16 absolute right-0 filter invert opacity-40"
          style={{
            animation: 'spookyFloat 3.5s ease-in-out infinite',
            '--rotation': '15deg'
          } as React.CSSProperties}
          draggable="false"
        />
        <img
          src="https://www.svgrepo.com/show/200481/spider-halloween.svg"
          alt="Spider"
          className="w-8 h-8 absolute top-16 right-16 filter invert opacity-30 scale-x-[-1]"
          style={{
            animation: 'spookyFloat 4s ease-in-out infinite',
            animationDelay: '0.5s',
            '--rotation': '-10deg'
          } as React.CSSProperties}
          draggable="false"
        />
      </div>
    </>
  );
};

export default SpookyCornerElements;