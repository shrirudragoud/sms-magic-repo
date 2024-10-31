import React from 'react';
import { Ghost } from 'lucide-react';
import FlyingBats from '../components/FlyingBats';
import BackgroundEffects from '../components/BackgroundEffects';

const TrickPage: React.FC = () => {
  const tombstones = [
    {
      text: "Here lies those who ignored 10DLC registration",
      date: "Banned 2024",
      warning: "Failed to register their numbers"
    },
    {
      text: "RIP Unverified Business",
      date: "Blocked 2024",
      warning: "No brand verification"
    },
    {
      text: "In Memory of Poor Deliverability",
      date: "Lost 2024",
      warning: "Skipped compliance checks"
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-black via-purple-950 to-black text-orange-100 relative overflow-hidden">
      <div className="fixed inset-0 bg-black/40 mix-blend-overlay pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(180deg,transparent_0,transparent_90%,#7f1d1d_100%)] animate-pulse opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,165,0,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] pointer-events-none opacity-20" />
      
      {/* Enhanced Flying Bats */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`bat-${i}`}
          className="fixed pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            animation: `flyBat ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${-Math.random() * 15}s`,
            zIndex: 1
          }}
        >
          <img
            src="https://www.svgrepo.com/show/200464/bat.svg"
            alt="Flying Bat"
            className="w-8 h-8 filter invert opacity-40"
            style={{
              transform: `scale(${0.5 + Math.random() * 0.5})`,
              animation: 'wingFlap 0.3s ease-in-out infinite alternate'
            }}
          />
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
            zIndex: 1
          }}
        >
          <img
            src="https://www.svgrepo.com/show/200470/black-cat-halloween.svg"
            alt="Prowling Cat"
            className="w-12 h-12 filter invert opacity-30"
          />
        </div>
      ))}

      {/* Ground Cat Silhouette */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none" style={{ zIndex: 2 }}>
        <img
          src="https://static.thenounproject.com/png/747440-512.png"
          alt="Cat Silhouette"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-auto filter invert opacity-30"
          style={{
            animation: 'gentleFloat 4s ease-in-out infinite'
          }}
        />
      </div>

      <div className="fixed top-8 right-8 w-24 h-24 rounded-full bg-orange-100/20 blur-sm animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-[100dvh] flex flex-col">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl font-horror text-purple-400 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] mb-4">
            Graveyard of Non-Compliance
          </h1>
          <p className="text-xl text-purple-300/80"></p>
        </header>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
          {tombstones.map((tomb, index) => (
            <div
              key={index}
              className="relative group max-w-[250px] mx-auto w-full"
              style={{
                animation: `float ${3 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {index === 1 && (
                <div className="absolute inset-0 flex justify-center" style={{ zIndex: 2 }}>
                  <div className="relative" style={{ animation: 'skeletonRise 2s ease-out forwards', animationDelay: '1s' }}>
                    <img
                      src="https://www.svgrepo.com/show/5725/halloween-skeleton-bones.svg"
                      alt="Rising Skeleton"
                      className="w-24 h-24 filter invert opacity-90"
                    />
                    <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 px-4 py-2 rounded-lg text-purple-300 text-sm">
                      Reach out to the ghostbusters from SMS Magic soon
                    </div>
                  </div>
                </div>
              )}

              <img
                src="https://www.svgrepo.com/show/454272/halloween-hand-rebellion.svg"
                alt="Skeleton Hand"
                className="absolute -bottom-4 -left-4 w-12 h-12 filter invert opacity-60 transform rotate-45 group-hover:translate-y-[-8px] transition-transform"
              />
              
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-purple-500/5 rounded-lg filter blur-md group-hover:bg-purple-500/10 transition-colors duration-300" />
                <img
                  src="https://www.svgrepo.com/show/454294/cemetery-grave-halloween.svg"
                  alt="Tombstone"
                  className="w-full h-auto filter invert opacity-90 relative z-10"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20">
                  <h3 className="font-horror text-lg sm:text-xl mb-2 text-purple-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {tomb.text}
                  </h3>
                  <p className="text-red-400 font-bold mb-1 text-sm sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {tomb.date}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {tomb.warning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default TrickPage;