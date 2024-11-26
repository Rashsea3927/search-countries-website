import ToggleThemeButton from '@/components/ToggleThemeButton';

const Header = () => {
  return (
    <header className='fixed top-0 w-full flex items-center h-20 px-4 shadow-sm bg-neutral-0 dark:bg-blue-700 sm:px-10'>
      <div className=' flex justify-between items-center w-full 2xl:max-w-2xl 2xl:mx-auto'>
        <h1 className='font-extrabold text-sm text-blue-900 dark:text-neutral-0 md:text-2xl'>
          Where in the world?
        </h1>
        <ToggleThemeButton />
      </div>
    </header>
  );
};

export default Header;
