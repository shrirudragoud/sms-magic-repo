import React, { useState } from 'react';
import { Candy, Skull } from 'lucide-react';
import ChocolateBasket from '../components/ChocolateBasket';
import CouponModal from '../components/CouponModal';
import FlyingBats from '../components/FlyingBats';

const TreatPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleChocolateClick = () => {
    setShowModal(true);
  };

  return (
    <div className="h-[100dvh] bg-gradient-to-b from-black via-purple-950 to-black text-orange-100 relative overflow-hidden flex flex-col">
      {/* Fog effect */}
      <div className="fixed inset-0 bg-black/40 mix-blend-overlay pointer-events-none" />
      
      {/* Animated blood drips */}
      <div className="fixed inset-0 bg-[linear-gradient(180deg,transparent_0,transparent_90%,#7f1d1d_100%)] animate-pulse opacity-20 pointer-events-none" />
      
      {/* Stars */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,165,0,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] pointer-events-none opacity-20" />
      
      <FlyingBats />

      <div className="flex-1 flex flex-col h-full relative z-10 safe-area-inset">
        <header className="pt-4 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
            <Skull className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 animate-pulse" />
            <h1 className="text-2xl sm:text-4xl font-bold text-orange-500 font-horror filter drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              Haunted Treats
            </h1>
            <Skull className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 animate-pulse" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-orange-300/80 text-sm sm:text-base">Click on treats to reveal your spooky coupon!</p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 rounded-full animate-pulse">
              <Candy className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400">Tap any treat...</span>
              <Candy className="w-4 h-4 text-orange-400" />
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4">
          <ChocolateBasket onChocolateClick={handleChocolateClick} />
        </main>

        <footer className="text-center py-2 sm:py-4 text-orange-300/60 bg-gradient-to-t from-black to-transparent">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Candy className="animate-pulse text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
            Dare to claim your treats... if you dare!
            <Candy className="animate-pulse text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
          </p>
        </footer>

        <CouponModal
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default TreatPage;