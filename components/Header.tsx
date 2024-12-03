import ToggleThemeButton from '@/components/ToggleThemeButton';

const Header = () => {
  return (
    <header className='w-full flex items-center h-20 px-4 shadow-sm bg-neutral-0 dark:bg-blue-700 sm:px-10 lg:px-0'>
      <div className=' flex justify-between items-center w-full xs:max-w-[478px] xs:mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl  2xl:max-w-2xl'>
        <h1 className='font-extrabold text-sm text-blue-900 dark:text-neutral-0 md:text-2xl'>
          Where in the world?
        </h1>
        <ToggleThemeButton />
      </div>
    </header>
  );
};

export default Header;
