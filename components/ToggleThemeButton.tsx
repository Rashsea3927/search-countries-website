'use client';

import MoonIcon from '@/components/icons/MoonIcon';
import { useEffect } from 'react';

const ToggleThemeButton = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button type='button' onClick={handleToggleTheme} className='flex gap-2 items-center md:gap-3'>
      <MoonIcon />
      <span className='font-semibold text-xs text-blue-900 dark:text-neutral-0 md:text-base'>
        Dark Mode
      </span>
    </button>
  );
};

export default ToggleThemeButton;
