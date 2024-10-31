import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Hanging Skeletons */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`skeleton-${i}`}
          className="fixed pointer-events-none"
          style={{
            left: `${15 + i * 25}%`,
            top: '-20px',
            animation: `swing ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <img
            src="https://www.svgrepo.com/show/5725/halloween-skeleton-bones.svg"
            alt="Hanging Skeleton"
            className="w-12 h-12 sm:w-16 sm:h-16 filter invert opacity-40 select-none transform rotate-180"
            style={{
              transformOrigin: 'top center',
            }}
            draggable="false"
          />
          <div className="h-20 w-px bg-gradient-to-b from-orange-500/20 to-transparent absolute top-0 left-1/2 -translate-x-1/2 -z-10" />
        </div>
      ))}

      {/* Prowling Cats */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`cat-${i}`}
          className="fixed pointer-events-none"
          style={{
            bottom: `${10 + i * 15}%`,
            animation: 'prowl 20s linear infinite',
            animationDelay: `${i * -7}s`,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 sm:w-10 sm:h-10 opacity-30"
          >
            <path
              d="M21 9c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 7c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 8c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </>
  );
};

export default BackgroundEffects;