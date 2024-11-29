import CountriesList from '@/components/CountriesList';
import Search from '@/components/Search';

export const Home = async () => {
  return (
    <>
      <Search />
      <CountriesList />
    </>
  );
};

export default Home;
