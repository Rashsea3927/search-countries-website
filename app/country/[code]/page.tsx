import { handleGetAllCountries, handleGetCountryByCode } from '@/lib/utils';
import { convertISO3toISO2 } from '@/lib/convertISO3toISO2';
import Image from 'next/image';
import BackButton from '@/components/BackButton';

const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

export async function generateStaticParams() {
  const countries = await handleGetAllCountries();

  return countries.map((country) => ({
    code: country.cca3,
  }));
}

const CountryDetailPage = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const country = await handleGetCountryByCode(code);

  const borderCountriesName = country.borders.map((border) => {
    const name = convertISO3toISO2(border);
    return regionNamesInEnglish.of(name);
  });

  const nativeNameKey = country.name.nativeName ? Object.keys(country.name.nativeName)[0] : '';
  const nativeName = country.name.nativeName ? country.name.nativeName[nativeNameKey].official : '';

  const languageNames = Object.entries(country.languages).map(([key, value]) => value);
  const languageDisplay = languageNames.length > 1 ? languageNames.join(', ') : languageNames[0];

  const currencyNames = country.currencies
    ? Object.values(country.currencies).map((currency) => currency.name)
    : [];
  const currencyDisplay = currencyNames.length > 1 ? currencyNames.join(', ') : currencyNames[0];

  return (
    <div className='mx-auto w-full max-w-[320px] xs:max-w-[478px] md:max-w-md pb-16'>
      <BackButton />
      <div className='md:grid md:grid-cols-2 md:justify-between md:gap-8'>
        <div className='relative w-full h-[229px] xs:h-[300px] md:h-[229px] mb-11 rounded overflow-hidden'>
          <Image className='object-cover' src={country.flags.svg} fill alt={country.name.common} />
        </div>
        <div>
          <h2 className='mb-4 text-xl text-blue-900 font-extrabold dark:text-neutral-0'>
            {country.name.common}
          </h2>
          <div className='grid gap-4 xs:grid-cols-2 xs:justify-between'>
            <div>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Native Name:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>{nativeName}</span>
              </p>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Population:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Region:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>{country.region}</span>
              </p>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Sub Region:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>
                  {country.subregion}
                </span>
              </p>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Capital:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>{country.capital}</span>
              </p>
            </div>

            <div>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Top Level Domain:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>{country.tld[0]}</span>
              </p>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Currencies:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>{currencyDisplay}</span>
              </p>
              <p className='leading-8'>
                <span className='text-sm font-semibold text-blue-900 dark:text-neutral-0'>
                  Languages:{' '}
                </span>
                <span className='text-sm text-blue-900 dark:text-neutral-0'>{languageDisplay}</span>
              </p>
            </div>

            {borderCountriesName.length > 0 && (
              <div className='grid gap-4 xs:col-span-2'>
                <h3 className='text-base font-semibold text-blue-900 dark:text-neutral-0'>
                  Border Countries
                </h3>
                <div className='flex gap-2 flex-wrap'>
                  {borderCountriesName.map((border) => (
                    <button
                      key={border}
                      className='bg-neutral-0 dark:bg-blue-700 text-blue-900 dark:text-neutral-0 shadow-border rounded py-[6px] px-8'
                    >
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
