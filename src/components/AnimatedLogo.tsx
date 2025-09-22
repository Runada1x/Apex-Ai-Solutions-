import React from 'react';
import Image from 'next/image';

interface AnimatedLogoProps {
  size?: 'small' | 'medium' | 'large' | 'hero';
  className?: string;
}

export default function AnimatedLogo({ size = 'medium', className = '' }: AnimatedLogoProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-32 h-32',
    hero: 'w-96 h-96'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main Logo with Animations */}
      <div className="relative w-full h-full animate-float">
        <Image
          src="/apex-logo-clean.jpg?v=2"
          alt="APEX AI"
          fill
          className="object-contain animate-pulse-glow"
          priority
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-${i + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full animate-ring-glow opacity-30">
          <div className="w-full h-full border-2 border-cyan-400/20 rounded-full animate-spin-slow" />
        </div>
      </div>
    </div>
  );
}