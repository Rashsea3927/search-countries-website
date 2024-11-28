'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';

const Filter = () => {
  const handleChangeRegion = (value: string) => {
    // handle region change
    console.log(value);
  };
  return (
    <Select onValueChange={handleChangeRegion}>
      <SelectTrigger className='w-[200px] border-none rounded bg-neutral-0 dark:bg-blue-700 shadow-md text-neutral-900 dark:text-neutral-0'>
        <SelectValue placeholder='Filter by Region' />
      </SelectTrigger>
      <SelectContent className='text-blue-900 dark:text-neutral-0 text-xs md:text-sm w-[200px] box-border'>
        <SelectItem value='all'>All</SelectItem>
        <SelectItem value='africa'>Africa</SelectItem>
        <SelectItem value='dark'>America</SelectItem>
        <SelectItem value='asia'>Asia</SelectItem>
        <SelectItem value='europe'>Europe</SelectItem>
        <SelectItem value='oceania'>Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Filter;
