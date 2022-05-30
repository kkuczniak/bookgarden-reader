import Image from 'next/image';

export default function MainPageHeader() {
  return (
    <header className='my-2 pb-2 flex flex-row dark:border-b dark:border-gray-700'>
      <div className='left pl-2 w-1/2'>
        <Image
          src='/gutenberg.webp'
          alt='Johannes Gutenberg'
          width={150}
          height={150}
          className='rounded-full'
        />
      </div>
      <div className='right w-1/2 m-auto'>
        <h1 className='font-Lora tracking-wide leading-5 text-center pr-3 sm:pr-5 sm:text-xl md:text-2xl md:tracking-wider'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, nobis!
        </h1>
      </div>
    </header>
  );
}
