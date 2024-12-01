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

export const handleFilterCountries = (countries: any[], region?: string, searchTerm?: string) => {
  let filteredData = countries;
  if (region) {
    filteredData = filteredData.filter((country) => country.region === region);
  }
  if (searchTerm) {
    filteredData = filteredData.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
};

export const handleGetCountryByCode = async (code: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,population,capital,region,subregion,currencies,tld,languages,borders`,
    { cache: 'force-cache' }
  );
  const data = await res.json();
  return data;
};
