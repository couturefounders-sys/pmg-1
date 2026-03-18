import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'trade-gothic': ["'Trade Gothic LT Std'", 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',      // MacBook Air 15" base
        '2xl': '1440px',     // Larger laptops
        '3xl': '1920px',     // Desktop monitors
        '4xl': '2560px',     // Ultra-wide / 32" monitors
      },
      maxWidth: {
        'container-xs': '640px',
        'container-sm': '768px',
        'container-md': '1024px',
        'container-lg': '1280px',   // MacBook Air 15" optimized
        'container-xl': '1440px',
        'container-2xl': '1600px',
        'container-3xl': '1920px',
        'container-4xl': '2200px',
      },
      fontSize: {
        'responsive-xs': 'clamp(0.75rem, 1vw, 0.875rem)',
        'responsive-sm': 'clamp(0.875rem, 1.2vw, 1rem)',
        'responsive-base': 'clamp(1rem, 1.5vw, 1.125rem)',
        'responsive-lg': 'clamp(1.125rem, 2vw, 1.5rem)',
        'responsive-xl': 'clamp(1.25rem, 2.5vw, 2rem)',
        'responsive-2xl': 'clamp(1.5rem, 3vw, 3rem)',
        'responsive-3xl': 'clamp(1.875rem, 3.5vw, 4rem)',
        'responsive-4xl': 'clamp(2rem, 4vw, 5rem)',
      },
      spacing: {
        'responsive-xs': 'clamp(0.5rem, 1vw, 1rem)',
        'responsive-sm': 'clamp(1rem, 2vw, 1.5rem)',
        'responsive-md': 'clamp(1.5rem, 3vw, 2rem)',
        'responsive-lg': 'clamp(2rem, 4vw, 3rem)',
        'responsive-xl': 'clamp(3rem, 5vw, 5rem)',
        'responsive-2xl': 'clamp(4rem, 8vw, 8rem)',
      },
    },
  },
  plugins: [],
};
export default config;
