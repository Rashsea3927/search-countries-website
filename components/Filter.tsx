'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeRegion = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (region !== 'all') {
      params.set('region', region);
    } else {
      params.delete('region');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleChangeRegion}>
      <SelectTrigger className='w-[200px] border-none rounded bg-neutral-0 dark:bg-blue-700 shadow-md text-neutral-900 dark:text-neutral-0'>
        <SelectValue placeholder='Filter by Region' />
      </SelectTrigger>
      <SelectContent className='text-blue-900 dark:text-neutral-0 text-xs md:text-sm w-[200px] box-border'>
        <SelectItem className='cursor-pointer' value='all'>
          All
        </SelectItem>
        <SelectItem className='cursor-pointer' value='Africa'>
          Africa
        </SelectItem>
        <SelectItem className='cursor-pointer' value='America'>
          America
        </SelectItem>
        <SelectItem className='cursor-pointer' value='Asia'>
          Asia
        </SelectItem>
        <SelectItem className='cursor-pointer' value='Europe'>
          Europe
        </SelectItem>
        <SelectItem className='cursor-pointer' value='Oceania'>
          Oceania
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Filter;
