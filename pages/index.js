import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import MainPageHeader from '../components/MainPageHeader';
import SearchInput from '../components/SearchInput';
import Layout from '../layout/Layout';

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://gutendex.com/books')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout description='Free ebook collection '>
      <MainPageHeader />

      <SearchInput />
      {isLoading ? (
        <div className='flex justify-center pt-12'>
          <div className='relative pr-12'>
            <div
              className='w-12 h-12 rounded-full absolute
                                  border-4 border-solid border-gray-200'
            ></div>

            <div
              className='w-12 h-12 rounded-full animate-spin absolute
                                  border-4 border-solid border-[#5A7D7C] border-t-transparent'
            ></div>
          </div>
        </div>
      ) : !data ? (
        <p>No profile data</p>
      ) : (
        <div className='inline-grid grid-cols-1 md:grid-cols-2 w-full'>
          {data.results.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}
    </Layout>
  );
}
