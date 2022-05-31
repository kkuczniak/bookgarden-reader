import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function SearchInput() {
  const [data, setData] = useState({ name: '' });

  return (
    <form className='flex flex-row justify-center py-2'>
      <input
        className='outline-slate-600 border rounded  border-[#5A7D7C] dark:border-0 focus:outline-none focus:ring-1 focus:ring-[#5A7D7C] pl-1 placeholder:italic'
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
        <SearchIcon
          className='h-8 pl-2 text-[#5A7D7C] dark:text-white'
          role='input'
          type='submit'
        />
      </Link>
    </form>
  );
}
