import Logo from './Logo';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  //to use correct darkMode Icon after mounted on client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkModeButton = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-10 h-10 text-yellow-500 mx-3'
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-10 h-10 text-gray-700 mx-3 '
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className='h-15 shadow-sm dark:border-gray-700'>
      <nav className='container  px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center'>
        <Logo />
        {darkModeButton()}
        <button
          className=' inline-flex p-3 hover:bg-[#4052413a] rounded lg:hidden text-[#5A7D7C]   outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/about' passHref>
              <a className='lg:inline-flex flex lg:w-auto w-full text-lg px-3 py-2 rounded text-black dark:text-white  items-center justify-center  '>
                O nas
              </a>
            </Link>
            <Link href='/favorites' passHref>
              <a className='lg:inline-flex flex lg:w-auto w-full text-lg px-3 py-2 rounded text-black  dark:text-white items-center justify-center '>
                Ulubione
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
