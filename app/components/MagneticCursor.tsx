"use client";

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorDotX = useMotionValue(0);
  const cursorDotY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const dotSpringX = useSpring(cursorDotX, { damping: 15, stiffness: 400 });
  const dotSpringY = useSpring(cursorDotY, { damping: 15, stiffness: 400 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorDotX.set(e.clientX);
      cursorDotY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.5)';
        cursorRef.current.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRef.current.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
      }
    };

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, cursorDotX, cursorDotY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 bg-blue-500/10 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: springX,
          top: springY,
          x: -16,
          y: -16,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 700 }}
      />
      <motion.div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-blue-400 rounded-full pointer-events-none z-50"
        style={{
          left: dotSpringX,
          top: dotSpringY,
          x: -2,
          y: -2,
        }}
      />
    </>
  );
}
