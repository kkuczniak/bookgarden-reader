export default function Footer() {
  return (
    <footer className='px-4 sm:px-6 w-full py-3 mt-24 absolute bottom-0'>
      <div className='text-center text-sm text-gray-500'>
        <span className='dark:text-gray-100 text-gray-900 font-bold text-lg mr-2'>
          BookGarden
        </span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}
