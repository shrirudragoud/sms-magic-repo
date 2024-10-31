import React from 'react';

interface CreditDisplayProps {
  credits: number;
}

const CreditDisplay: React.FC<CreditDisplayProps> = ({ credits }) => {
  return (
    <div className="inline-block bg-gradient-to-r from-black/80 via-orange-900/40 to-black/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
      <p className="text-lg sm:text-xl font-bold text-orange-400 font-horror">
        <span className="mr-2">💀</span>
        Souls Claimed: {credits}
        <span className="ml-2">💀</span>
      </p>
    </div>
  );
};

export default CreditDisplay;