import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';

export default function BookReader(props) {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
        setLoading(false);
        console.log(book.formats['application/epub+zip']);
      });
  }, [id]);

  return (
    <Layout title='Reader' description='Reader ebook and download list'>
      <div className='my-2 pb-2 flex flex-row border-b border-black dark:border-gray-700'>
        <h1 className='font-Lora tracking-wide leading-5 text-center pr-3 sm:pr-5 ml-2 my-2 text-xl md:text-2xl md:tracking-wider'>
          Your Reading Options
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
      ) : !book ? (
        <p>No profile data</p>
      ) : (
        <div className='flex flex-col w-full mt-3 md:mt-5 justify-center items-center'>
          {book.formats['image/jpeg'] ? (
            <Image
              src={book.formats['image/jpeg']}
              width={200}
              height={300}
              layout='fixed'
              alt='Book Cover'
            />
          ) : (
            <Image
              src={'/altBookImage.webp'}
              width={200}
              height={300}
              layout='fixed'
              alt='Book Cover'
            />
          )}
          <p className='font-Lora pt-4 text-base md:text-xl'>{book.title}</p>
          <p className='font-Lora text-base md:text-xl'>
            {book.authors[0].name}
          </p>
          <div className='readingOptions pt-5'>
            <a
              href={book.formats['text/html']}
              target='_blank'
              rel='noopener noreferrer'
              className='flex mx-2 px-2 mt-2 items-center justify-center  text-black uppercase rounded  py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5  bg-[#a0c1d1]'
            >
              Read Online
            </a>
            <a
              download
              href={book.formats['application/epub+zip']}
              className='flex mx-2 px-2 mt-2 items-center  text-black uppercase rounded  py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5  bg-[#4a887f]'
            >
              download for ebook
            </a>
            <a
              download
              href={book.formats['application/x-mobipocket-ebook']}
              className='flex mx-2 px-2 mt-2 items-center justify-center  text-black uppercase rounded  py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5  bg-[#1e6b5e]'
            >
              download for Kindle
            </a>
          </div>
        </div>
      )}
    </Layout>
  );
}
