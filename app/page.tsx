import { Suspense } from 'react';
import CountriesList from '@/components/CountriesList';
import Search from '@/components/Search';

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
        <CountriesList />
      </Suspense>
    </>
  );
};

export default Home;
