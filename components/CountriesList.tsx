import { handleGetAllCountries } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const CountriesList = async () => {
  const countries = await handleGetAllCountries();

  return (
    <section>
      <ul className='w-full max-w-xs mx-auto grid gap-10 sm:max-w-sm lg:max-w-lg 2xl:max-w-2xl sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-[75px]'>
        {countries.map((country) => (
          <li key={country.cca3} className='rounded overflow-hidden shadow-xs'>
            <Link href={`/country/${country.cca3}`}>
              <div className='relative w-full h-40'>
                <Image
                  className='w-full h-full object-cover'
                  src={country.flags.svg}
                  fill
                  alt={country.name.common}
                />
              </div>
              <div className='px-6 pt-6 pb-11 bg-neutral-0 dark:bg-blue-700'>
                <h3 className='text-md font-extrabold mb-4 text-blue-900 dark:text-neutral-0'>
                  {country.name.common}
                </h3>
                <p className='text-sm text-blue-900 dark:text-neutral-0'>
                  Population: {country.population.toLocaleString()}
                </p>
                <p className='mt-2 text-sm text-blue-900 dark:text-neutral-0'>
                  Region: {country.region}
                </p>
                <p className='mt-2 text-sm text-blue-900 dark:text-neutral-0'>
                  Capital: {country.capital}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountriesList;
