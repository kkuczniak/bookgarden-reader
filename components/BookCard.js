import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function BookCard({ book }) {
  const { addBookToFavorites, favorites } = useContext(GlobalContext);

  let storedBook = favorites.find((o) => o.id === book.id);
  const favoritesDisabled = storedBook ? true : false;

  return (
    <>
      <div className='flex flex-col justify-center items-center py-2 '>
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
            disabled={favoritesDisabled}
            onClick={() => addBookToFavorites(book)}
            className='flex disabled:pointer-events-none disabled:opacity-50 px-2 mx-2 items-center text-black uppercase rounded py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 bg-[#b5b2c2]'
          >
            add to favorites
          </button>
        </div>
      </div>
    </>
  );
}
