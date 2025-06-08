import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Purple Color Palette
        purple: {
          50: '#faf9fc',
          100: '#f3f1f7',
          200: '#e8e4ee',
          300: '#d4cde0',
          400: '#B9B4C7',
          500: '#9b94ab',
          600: '#7d7590',
          700: '#5C5470',
          800: '#4a4560',
          900: '#352F44',
          950: '#1f1c28',
        },
        // Light Cream
        cream: {
          50: '#fefefe',
          100: '#fdfdfc',
          200: '#fbfbf8',
          300: '#f8f7f3',
          400: '#FAF0E6',
          500: '#f2e8dd',
          600: '#e8ddd0',
          700: '#d4c7b8',
          800: '#b8a898',
          900: '#9a8a7a',
          950: '#7a6b5c',
        },
        sage: {
          50: '#f8faf9',
          100: '#e8f0ed',
          200: '#d1e1db',
          300: '#b4cfc5',
          400: '#93B1A6',
          500: '#7a9d91',
          600: '#5C8374',
          700: '#4a6b5e',
          800: '#183D3D',
          900: '#040D12',
          950: '#020609',
        },
        // Add gray colors for the new navigation design
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        'md-sans': ['var(--font-md-sans)', 'DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['var(--font-md-sans)', 'DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      // Add ring colors for focus states
      ringColor: {
        'ring': '#3b82f6',
      },
      ringOffsetColor: {
        'background': '#000000',
      },
      // Mobile-specific screen sizes
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
