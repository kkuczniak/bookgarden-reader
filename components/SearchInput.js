import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchInput() {
  const [data, setData] = useState({ name: '' });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: '/searchPage', query: data });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-row justify-center py-2 h-12 mb-5'
    >
      <input
        className='outline-slate-600 border rounded bg-transparent dark:bg-gray-800 border-[#5A7D7C]  focus:outline-none focus:ring-1 focus:ring-[#5A7D7C] pl-1 placeholder:italic'
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

      <input
        type='submit'
        value='Search'
        className='ml-2 px-1 cursor-pointer border rounded border-[#5A7D7C] hover:bg-slate-200 dark:hover:bg-gray-700 font-Lora '
      />
    </form>
  );
}
