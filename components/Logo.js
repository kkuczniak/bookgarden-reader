import { BookOpenIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <a className='my-2 flex items-center space-x-1 text-[#5A7D7C]'>
        <BookOpenIcon className='h-9 w-9 mt-1 flex-shrink-0 mr-3' />
        <span className='font-bold text-3xl font-sans tracking-tight  whitespace-nowrap'>
          BookGarden
        </span>
      </a>
    </Link>
  );
}
