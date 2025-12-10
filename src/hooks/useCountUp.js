import { useState, useEffect } from 'react';

/**
 * Custom hook for animated counter effect
 * @param {number} end - The target number to count up to
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @returns {[number, function]} - Returns [count, setHasStarted] where setHasStarted triggers the animation
 */
export const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasStarted]);

  return [count, setHasStarted];
};

