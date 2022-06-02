import Layout from '../layout/Layout';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

function FavoritesPage() {
  const { favorites, removeBookFromFavorites } = useContext(GlobalContext);

  return (
    <Layout title='BookGarden - favorites'>
      <div className='my-2 pb-2 flex flex-row border-b border-black dark:border-gray-700'>
        <h1 className='font-Lora tracking-wide leading-5 text-center pr-3 sm:pr-5 sm:text-xl md:text-2xl md:tracking-wider'>
          Your Favorite Collection
        </h1>
      </div>
      {favorites.length > 0 ? (
        <div className='flex flex-row w-full flex-wrap justify-center'>
          {favorites.map((book, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center py-2 '
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
              <p className='font-Lora pt-4'>{book.title}</p>
              <p className='font-Lora'>{book.authors[0].name}</p>
              <div className='buttons py-2 flex flex-row'>
                <Link href={`/reader/${book.id}`} passHref>
                  <a className='flex mx-2 px-2 items-center text-black uppercase rounded  py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5  bg-[#a0c1d1]'>
                    Read this book
                  </a>
                </Link>
                <button
                  onClick={() => removeBookFromFavorites(book.id)}
                  className='flex disabled:pointer-events-none disabled:opacity-50 px-2 mx-2 items-center text-black uppercase rounded py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 bg-[#b5b2c2]'
                >
                  Remove Book
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className='font-Lora tracking-wide leading-5 text-center pr-3 sm:pr-5 sm:text-xl md:text-2xl md:tracking-wider'>
          No books in your list, add some
        </h2>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(FavoritesPage), { ssr: false });
