import CountriesList from '@/components/CountriesList';
import Search from '@/components/Search';

export const Home = () => {
  return (
    <>
      <Search />
      <CountriesList />
    </>
  );
};

export default Home;
