import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function SearchInput() {
  const [data, setData] = useState({ name: '' });

  return (
    <form className='flex flex-row justify-center py-2'>
      <input
        className='outline-slate-600 focus:outline-none focus:ring-1 focus:ring-[#5A7D7C] pl-1 placeholder:italic'
        type='text'
        required
        placeholder='Search books...'
        value={data.name}
        onChange={(e) =>
          setData({
            name: e.target.value,
          })
        }
      ></input>
      <Link href={{ pathname: '/searchPage', query: data }}>
        <SearchIcon className='h-8 pl-2' role='button' />
      </Link>
    </form>
  );
}
