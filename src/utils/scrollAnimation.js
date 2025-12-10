// Scroll animation utility functions

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const observeElements = (selector, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return observer;
};

export default {
  scrollToTop,
  scrollToElement,
  observeElements,
};

