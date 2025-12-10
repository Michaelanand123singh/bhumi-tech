/**
 * Animation Utilities
 * Professional animation helpers for consistent, subtle animations across the site
 */

import { useEffect } from 'react';

/**
 * Fade in animation on scroll
 */
export const useFadeInOnScroll = (ref, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
  } = options;

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, delay]);
};

/**
 * Icon animation classes
 */
export const iconAnimations = {
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  spin: 'animate-spin',
  ping: 'animate-ping',
  // Custom subtle animations
  float: 'animate-[float_3s_ease-in-out_infinite]',
  rotate: 'animate-[rotate_20s_linear_infinite]',
  scale: 'hover:scale-110 transition-transform duration-300',
};

/**
 * CSS for custom animations (to be added to index.css or a global CSS file)
 */
export const customAnimationCSS = `
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

