import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector'],
  theme: {
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        neutral: {
          '0': 'var(--neutral-0)',
          '100': 'var(--neutral-100)',
          '300': 'var(--neutral-300)',
          '400': 'var(--neutral-400)',
          '500': 'var(--neutral-500)',
        },
        blue: {
          '700': 'var(--blue-700)',
          '800': 'var(--blue-800)',
          '900': 'var(--blue-900)',
        },
      },
      fontFamily: {
        nunito: ['var(--font-nunito-sans)'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.375rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        dark: '0 0 7px 0 rgba(0, 0, 0, 0.03)',
        border: '0 0 4px 1px rgba(17, 21, 23, 0.25)',
        xs: '0 0 7px 2px rgba(0, 0, 0, 0.03)',
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        md: '0 2px 9px 0 rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        xs: '16.5rem',
        sm: '36rem',
        md: '45rem',
        lg: '54.5rem',
        xl: '71.25rem',
        '2xl': '80rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      gap: {
        18: '4.5rem',
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
