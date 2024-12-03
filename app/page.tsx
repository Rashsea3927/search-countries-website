import { Suspense } from 'react';
import CountriesList from '@/components/CountriesList';
import Search from '@/components/Search';

const Home = () => {
  return (
    <>
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
        <CountriesList />
      </Suspense>
    </>
  );
};

export default Home;
