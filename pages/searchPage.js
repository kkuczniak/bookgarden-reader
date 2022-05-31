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
    fetch(`https://gutendex.com/books?search=${name}`)
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
                                  border-4 border-solid border-[hsl(178,16%,42%)] border-t-transparent'
            ></div>
          </div>
        </div>
      ) : !data ? (
        <p>No profile data</p>
      ) : (
        <div className='inline-grid grid-cols-1 md:grid-cols-2'>
          {data.results.map((book, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center py-2'
            >
              {book.formats['image/jpeg'] ? (
                <Image
                  src={book.formats['image/jpeg']}
                  width={200}
                  height={300}
                  layout='fixed'
                />
              ) : (
                <Image
                  src={'/altBookImage.webp'}
                  width={200}
                  height={300}
                  layout='fixed'
                />
              )}

              <h1 className='font-Lora pt-4'>{book.title}</h1>
              <h2 className='font-Lora'>{book.authors[0].name}</h2>
              <div className='buttons py-2 flex flex-row'>
                <Link href={`/reader/${book.id}`} passHref>
                  <a className='flex mx-2 px-2 items-center text-black uppercase rounded  py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5  bg-[#a0c1d1]'>
                    Read this book
                  </a>
                </Link>
                <button className='flex px-2 mx-2 items-center text-black uppercase rounded py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 bg-[#b5b2c2]'>
                  add to favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
