import React from 'react';
import SpookyCornerElements from './SpookyCornerElements';

interface ChocolateBasketProps {
  onChocolateClick: () => void;
}

const ChocolateBasket: React.FC<ChocolateBasketProps> = ({ onChocolateClick }) => {
  const treatEmojis = ['🍫', '🍬', '🍭', '🧁', '🍪'];
  
  const CONFIG = {
    CONTAINER_WIDTH: 100,
    CONTAINER_HEIGHT: 60,
    CONTAINER_TOP: 8,
    NUM_CANDIES: 15,
    SPREAD_X: 160,
    SPREAD_Y: 100,
    BASE_SIZE: {
      EMOJI: {
        MOBILE: "text-2xl",
        TABLET: "sm:text-3xl",
        DESKTOP: "md:text-4xl"
      },
      SVG: {
        MOBILE: "w-8 h-8",
        TABLET: "sm:w-10 sm:h-10",
        DESKTOP: "md:w-12 md:h-12"
      }
    }
  };
  
  const createCandyPosition = (index: number) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    
    const randomX = (Math.random() - 0.5) * 30;
    const randomY = (Math.random() - 0.5) * 30;
    
    const x = ((col - 2) * (CONFIG.SPREAD_X / 4)) + randomX;
    const y = ((row - 1) * (CONFIG.SPREAD_Y / 2)) + randomY;
    
    const rotation = Math.random() * 360;
    
    return { x, y, rotation };
  };

  return (
    <div className="relative w-[min(85vw,600px)] mx-auto">
      <SpookyCornerElements />
      
      <div className="relative aspect-[4/3] flex items-center justify-center scale-[0.65] sm:scale-75">
        {/* Left Skeleton Hand */}
        <img
          src="https://static.thenounproject.com/png/2108465-512.png"
          alt="Left Skeleton Hand"
          className="absolute left-[-15%] bottom-[20%] w-[30%] h-auto filter invert opacity-60 select-none pointer-events-none"
          style={{
            zIndex: 3,
            animation: 'reachForCandy 4s ease-in-out infinite',
            '--start-x': '-15%',
            '--start-y': '20%',
            '--reach-x': '-5%',
            '--reach-y': '10%',
            '--rotation': '25deg',
            '--reach-rotate': '15deg'
          } as React.CSSProperties}
          draggable="false"
        />

        {/* Right Skeleton Hand */}
        <img
          src="https://static.thenounproject.com/png/2108457-512.png"
          alt="Right Skeleton Hand"
          className="absolute right-[-15%] bottom-[20%] w-[30%] h-auto filter invert opacity-60 select-none pointer-events-none"
          style={{
            zIndex: 3,
            animation: 'reachForCandy 4s ease-in-out infinite',
            animationDelay: '2s',
            '--start-x': '15%',
            '--start-y': '20%',
            '--reach-x': '5%',
            '--reach-y': '10%',
            '--rotation': '-25deg',
            '--reach-rotate': '-15deg'
          } as React.CSSProperties}
          draggable="false"
        />

        {/* Candy Container - Behind basket */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            width: `${CONFIG.CONTAINER_WIDTH}%`,
            height: `${CONFIG.CONTAINER_HEIGHT}%`,
            top: `${CONFIG.CONTAINER_TOP}%`,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        >
          {[...Array(CONFIG.NUM_CANDIES)].map((_, i) => {
            const useEmoji = Math.random() > 0.5;
            const emoji = treatEmojis[Math.floor(Math.random() * treatEmojis.length)];
            const position = createCandyPosition(i);
            const delay = Math.random() * 2;
            
            return (
              <button
                key={i}
                onClick={onChocolateClick}
                className="absolute group cursor-pointer touch-manipulation"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: 1
                }}
              >
                <div 
                  className="relative transition-all duration-300"
                  style={{
                    animation: `gentleFloat ${2 + Math.random()}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                    transform: `rotate(${position.rotation}deg)`
                  }}
                >
                  {useEmoji ? (
                    <span 
                      className={`${CONFIG.BASE_SIZE.EMOJI.MOBILE} ${CONFIG.BASE_SIZE.EMOJI.TABLET} ${CONFIG.BASE_SIZE.EMOJI.DESKTOP} filter drop-shadow-lg select-none transition-transform duration-300 group-hover:scale-110 block`}
                    >
                      {emoji}
                    </span>
                  ) : (
                    <img
                      src="https://www.svgrepo.com/show/200471/candy.svg"
                      alt="Candy"
                      className={`${CONFIG.BASE_SIZE.SVG.MOBILE} ${CONFIG.BASE_SIZE.SVG.TABLET} ${CONFIG.BASE_SIZE.SVG.DESKTOP} object-contain filter invert-[.8] sepia-[.4] saturate-[1.3] hue-rotate-[340deg] brightness-110 select-none transition-transform duration-300 group-hover:scale-110`}
                      draggable="false"
                    />
                  )}
                  <div className="absolute inset-[-15%] bg-orange-500/0 group-hover:bg-orange-500/10 rounded-full transition-all duration-300" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    <span className="text-sm text-orange-300 bg-black/80 px-2 py-1 rounded-full">
                      Pick your treat
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Basket image - In front */}
        <img
          src="https://www.svgrepo.com/show/200478/basket-pumpkin.svg"
          alt="Halloween Basket"
          className="absolute w-full h-full object-contain filter brightness-75 hue-rotate-[340deg] pointer-events-none select-none"
          style={{ zIndex: 2 }}
          draggable="false"
        />
      </div>

      <div className="absolute -left-8 sm:-left-12 top-1/2 transform -translate-y-1/2 -rotate-45">
        <img
          src="https://www.svgrepo.com/show/200464/bat.svg"
          alt="Left Bat"
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain opacity-80 filter invert select-none"
          draggable="false"
        />
      </div>
      <div className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2 rotate-45">
        <img
          src="https://www.svgrepo.com/show/200464/bat.svg"
          alt="Right Bat"
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain opacity-80 filter invert scale-x-[-1] select-none"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ChocolateBasket;