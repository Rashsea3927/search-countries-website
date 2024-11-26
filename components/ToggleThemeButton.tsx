import MoonIcon from '@/components/icons/MoonIcon';

const ToggleThemeButton = () => {
  return (
    <button type='button' className='flex gap-2 items-center md:gap-3'>
      <MoonIcon />
      <span className='font-semibold text-xs text-blue-900 dark:text-neutral-0 md:text-base'>
        Dark Mode
      </span>
    </button>
  );
};

export default ToggleThemeButton;
