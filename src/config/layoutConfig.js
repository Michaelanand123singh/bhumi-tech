/**
 * Layout Configuration
 * 
 * Centralized configuration for the website layout.
 * This file controls spacing, widths, breakpoints, and other layout-related settings.
 */

export const layoutConfig = {
  // Container Settings
  container: {
    maxWidth: '7xl', // Tailwind max-w-7xl (1280px)
    padding: {
      mobile: 'px-4',
      tablet: 'sm:px-6',
      desktop: 'lg:px-8',
    },
  },

  // Navbar Settings
  navbar: {
    height: 'h-auto',
    padding: 'py-4',
    backgroundColor: 'bg-white',
    shadow: 'shadow-md',
    logo: {
      height: 'h-12',
      width: 'w-auto',
    },
    links: {
      spacing: 'space-x-6',
      color: 'text-gray-700',
      hoverColor: 'hover:text-blue-600',
      transition: 'transition-colors',
    },
  },

  // Footer Settings
  footer: {
    backgroundColor: 'bg-gray-800',
    textColor: 'text-white',
    padding: 'py-8',
    logo: {
      height: 'h-10',
      width: 'w-auto',
    },
    grid: {
      columns: {
        mobile: 'grid-cols-1',
        tablet: 'md:grid-cols-4',
      },
      gap: 'gap-8',
    },
  },

  // Main Content Settings
  main: {
    minHeight: 'min-h-screen',
    flexGrow: 'flex-grow',
    width: 'w-full',
  },

  // Section Settings
  section: {
    padding: {
      vertical: 'py-16',
      horizontal: 'px-4',
    },
    maxWidth: 'max-w-7xl',
    margin: 'mx-auto',
  },

  // Responsive Breakpoints
  breakpoints: {
    mobile: '640px',   // sm
    tablet: '768px',   // md
    desktop: '1024px', // lg
    wide: '1280px',    // xl
    extraWide: '1536px', // 2xl
  },

  // Spacing Scale
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
  },

  // Color Scheme
  colors: {
    primary: {
      main: 'blue-600',
      hover: 'blue-700',
      light: 'blue-50',
    },
    secondary: {
      main: 'gray-200',
      hover: 'gray-300',
    },
    text: {
      primary: 'gray-800',
      secondary: 'gray-600',
      light: 'gray-400',
    },
    background: {
      white: 'white',
      gray: 'gray-50',
      dark: 'gray-800',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    sizes: {
      xs: 'text-xs',     // 12px
      sm: 'text-sm',     // 14px
      base: 'text-base', // 16px
      lg: 'text-lg',     // 18px
      xl: 'text-xl',     // 20px
      '2xl': 'text-2xl', // 24px
      '3xl': 'text-3xl', // 30px
      '4xl': 'text-4xl', // 36px
      '5xl': 'text-5xl', // 48px
    },
    weights: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },

  // Animation & Transitions
  transitions: {
    default: 'transition-colors duration-200',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-300',
  },

  // Z-Index Layers
  zIndex: {
    navbar: 40,
    footer: 10,
    whatsapp: 50,
    modal: 100,
    dropdown: 30,
  },
};

export default layoutConfig;

