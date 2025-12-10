/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      colors: {
        // Premium Green Palette
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a', // Primary green
          700: '#15803d', // Darker green for hover
          800: '#166534',
          900: '#14532d',
        },
        // Premium Brown Palette (minor accent)
        brown: {
          50: '#faf8f6',
          100: '#f5f1eb',
          200: '#e8ddd4',
          300: '#d4c4b0',
          400: '#b8a089',
          500: '#9d7f6a',
          600: '#7d6554', // Primary brown
          700: '#5d4a3d',
          800: '#3d3127',
          900: '#1d1812',
        },
        // Text colors - black variations
        text: {
          primary: '#000000',    // Pure black
          secondary: '#1a1a1a',  // Near black
          muted: '#4a4a4a',      // Dark gray for secondary text
        },
      },
    },
  },
  plugins: [],
}

