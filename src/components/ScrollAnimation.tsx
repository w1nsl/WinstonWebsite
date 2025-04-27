"use client";
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '',
  animationType,
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a delay if specified
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay / 2); // Halving the delay time to speed up sequential animations
          
          // Once the animation is triggered, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Lower threshold so elements animate sooner
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);
  
  // Determine the animation class based on the type
  let animationClass = '';
  switch (animationType) {
    case 'fade-in':
      animationClass = 'fade-in-section';
      break;
    case 'slide-in-left':
      animationClass = 'slide-in-left';
      break;
    case 'slide-in-right':
      animationClass = 'slide-in-right';
      break;
    case 'scale-in':
      animationClass = 'scale-in';
      break;
    default:
      animationClass = 'fade-in-section';
  }
  
  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 