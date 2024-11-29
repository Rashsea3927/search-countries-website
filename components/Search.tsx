'use client';

import SearchIcon from '@/components/icons/SearchIcon';
import Filter from '@/components/Filter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchTerm = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <section className='mx-4 mb-8 sm:mx-8 md:flex md:justify-between xl:max-w-xl xl:mx-auto 2xl:max-w-2xl'>
      <div className='mb-10 px-8 flex items-center gap-6 rounded bg-neutral-0 dark:bg-blue-700 shadow-md md:w-[480px]'>
        <SearchIcon />
        <input
          onChange={(e) => handleSearchTerm(e.target.value)}
          defaultValue={searchParams.get('name') || ''}
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
