import React, { useEffect, useRef } from 'react';
import PortfolioStore from './useStore';
import { techData } from './tech-icons.js';

const TechStack = () => {
  const theme = PortfolioStore((state) => state.theme);
  const hoverAudioRef = useRef(null);

  useEffect(() => {
    hoverAudioRef.current = new Audio('/src/assets/p1.wav');
    hoverAudioRef.current.volume = 0.5;
    hoverAudioRef.current.preload = 'auto';
  }, []);

  const playHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const stopHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.currentTime = 0;
    }
  };

  const techStack = techData.map((tech) => ({
    ...tech,
    textColor: theme ? tech.textColor.replace('text-black dark:text-white', 'text-black') : 'text-white'
  }));

  return (
    <section className="px-6 mt-10.5 mb-0 ">
      <h2 className={`mb-3 ${theme ? 'text-black' : 'text-white'} text-start`}>Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-11 gap-4 max-w-5xl mx-auto">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="group cursor-pointer rounded-xl flex flex-col items-center gap-2 transition-all duration-400 ease-out hover:scale-105"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
              onClick={() => window.open(tech.url, '_blank', 'noopener,noreferrer')}
              onMouseEnter={playHoverSound}
              onMouseLeave={stopHoverSound}
              title={`${tech.name} official website`}
            >
              <div className="rounded-lg bg-gray-950/10 hover:bg-gray-900/20 transition-all duration-300">
                <Icon className={`w-6 h-6 ${tech.iconColor} drop-shadow-lg`} />
              </div>
              <span className={`text-xs font-mono ${theme ? 'text-black' : 'text-white'} tracking-tight text-center leading-tight`}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;

