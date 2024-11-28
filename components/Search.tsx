import SearchIcon from '@/components/icons/SearchIcon';
import Filter from '@/components/Filter';

const Search = () => {
  return (
    <section className='mx-4 mt-6 mb-8 sm:mx-8 md:flex md:justify-between md:mt-12 2xl:max-w-2xl 2xl:mx-auto'>
      <div className='mb-10 px-8 flex items-center gap-6 rounded bg-neutral-0 dark:bg-blue-700 shadow-md md:w-[480px]'>
        <SearchIcon />
        <input
          type='text'
          className='w-full h-12 bg-transparent outline-none text-xs md:text-sm text-blue-900 dark:text-neutral-0 placeholder:text-neutral-300'
          placeholder='Search for a country…'
        />
      </div>
      <Filter />
    </section>
  );
};

export default Search;
