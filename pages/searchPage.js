import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import Layout from '../layout/Layout';

export default function SearchPage() {
  const router = useRouter();
  const { name } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gutendex.com/books?search=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, [name]);

  return (
    <Layout title='Search Results' description='Gutenberg ebook search results'>
      <div className='my-2 pb-2 flex flex-row border-b border-black dark:border-gray-700'>
        <h1 className='font-Lora tracking-wide leading-5 text-center pr-3 sm:pr-5 ml-2 text-xl md:text-2xl md:tracking-wider'>
          Your Search Results
        </h1>
      </div>
      {loading ? (
        <div className='flex justify-center pt-12'>
          <div className='relative pr-12'>
            <div
              className='w-12 h-12 rounded-full absolute
                                  border-4 border-solid border-gray-200'
            ></div>

            <div
              className='w-12 h-12 rounded-full animate-spin absolute
                                  border-4 border-solid border-[hsl(178,16%,42%)] border-t-transparent'
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
