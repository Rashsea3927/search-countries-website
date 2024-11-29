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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
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
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
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
        xs: '0 0 7px 2px rgba(0, 0, 0, 0.03)',
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        md: '0 2px 9px 0 rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        xs: '16.5rem',
        sm: '36rem',
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
