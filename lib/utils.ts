import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleGetAllCountries = async () => {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3',
    { cache: 'force-cache' }
  );
  const data = await res.json();
  const sortData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  return sortData;
};
