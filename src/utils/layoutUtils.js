import layoutConfig from '../config/layoutConfig';

/**
 * Layout Utility Functions
 * 
 * Helper functions for layout-related operations and calculations.
 */

/**
 * Get container classes based on layout config
 * @returns {string} Tailwind classes for container
 */
export const getContainerClasses = () => {
  const { container } = layoutConfig;
  return `w-full max-w-${container.maxWidth} mx-auto ${container.padding.mobile} ${container.padding.tablet} ${container.padding.desktop}`;
};

/**
 * Get section classes with proper spacing
 * @param {Object} options - Section options
 * @param {boolean} options.hasBackground - Whether section has background color
 * @param {string} options.backgroundColor - Background color class
 * @returns {string} Tailwind classes for section
 */
export const getSectionClasses = ({ hasBackground = false, backgroundColor = 'bg-gray-50' } = {}) => {
  const { section } = layoutConfig;
  const baseClasses = `${section.padding.vertical} ${section.padding.horizontal} w-full`;
  const backgroundClass = hasBackground ? backgroundColor : '';
  return `${baseClasses} ${backgroundClass}`.trim();
};

/**
 * Get responsive grid classes
 * @param {Object} options - Grid options
 * @param {number} options.mobileCols - Columns on mobile
 * @param {number} options.tabletCols - Columns on tablet
 * @param {number} options.desktopCols - Columns on desktop
 * @param {string} options.gap - Gap between items
 * @returns {string} Tailwind classes for grid
 */
export const getGridClasses = ({ 
  mobileCols = 1, 
  tabletCols = 2, 
  desktopCols = 3, 
  gap = 'gap-8' 
} = {}) => {
  return `grid grid-cols-${mobileCols} md:grid-cols-${tabletCols} lg:grid-cols-${desktopCols} ${gap}`;
};

/**
 * Get responsive text size classes
 * @param {string} mobileSize - Text size on mobile
 * @param {string} tabletSize - Text size on tablet (optional)
 * @param {string} desktopSize - Text size on desktop (optional)
 * @returns {string} Tailwind classes for responsive text
 */
export const getResponsiveTextClasses = (mobileSize, tabletSize = null, desktopSize = null) => {
  let classes = mobileSize;
  if (tabletSize) classes += ` md:${tabletSize}`;
  if (desktopSize) classes += ` lg:${desktopSize}`;
  return classes;
};

/**
 * Get spacing class from spacing scale
 * @param {string} size - Size key (xs, sm, md, lg, xl, 2xl, 3xl)
 * @returns {string} Tailwind spacing class
 */
export const getSpacingClass = (size) => {
  const spacingMap = {
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-12',
    '3xl': 'p-16',
  };
  return spacingMap[size] || spacingMap.md;
};

/**
 * Check if viewport is mobile
 * @returns {boolean}
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < parseInt(layoutConfig.breakpoints.tablet);
};

/**
 * Check if viewport is tablet
 * @returns {boolean}
 */
export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width >= parseInt(layoutConfig.breakpoints.tablet) && 
         width < parseInt(layoutConfig.breakpoints.desktop);
};

/**
 * Check if viewport is desktop
 * @returns {boolean}
 */
export const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= parseInt(layoutConfig.breakpoints.desktop);
};

/**
 * Get viewport width
 * @returns {number}
 */
export const getViewportWidth = () => {
  if (typeof window === 'undefined') return 0;
  return window.innerWidth;
};

/**
 * Get viewport height
 * @returns {number}
 */
export const getViewportHeight = () => {
  if (typeof window === 'undefined') return 0;
  return window.innerHeight;
};

export default {
  getContainerClasses,
  getSectionClasses,
  getGridClasses,
  getResponsiveTextClasses,
  getSpacingClass,
  isMobile,
  isTablet,
  isDesktop,
  getViewportWidth,
  getViewportHeight,
};

