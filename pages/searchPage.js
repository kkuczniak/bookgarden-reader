import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';

export default function SearchPage() {
  const router = useRouter();
  const { name } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gnikdroy.pythonanywhere.com/api/book?search=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <Layout>
      {loading ? (
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
        <div>
          {data.results.map((book, index) => (
            <div key={index}>
              <h1>{book.title}</h1>
              <Link href={`/reader/${book.id}`} passHref>
                <h2>
                  {book.resources?.find(
                    ({ type }) => type === 'application/epub+zip'
                  )?.uri || ''}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
