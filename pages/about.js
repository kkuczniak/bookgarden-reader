import MainPageHeader from '../components/MainPageHeader';
import Layout from '../layout/Layout';

export default function About() {
  return (
    <Layout>
      <MainPageHeader />
      <div className='gutenberg font-Lora flex flex-col justify-center items-center text-center'>
        <h2 className='text-2xl'>Welcome to Project Gutenberg</h2>
        <h3 className='text-xl mt-3'>
          Project Gutenberg is a library of over 60,000 free eBooks
        </h3>
        <p className='text-lg mt-5 lg:mt-16 lg:w-5/6'>
          Choose among free epub and Kindle eBooks, download them or read them
          online. You will find the world&apos;s great literature here, with
          focus on older works for which U.S. copyright has expired. Thousands
          of volunteers digitized and diligently proofread the eBooks, for you
          to enjoy.
        </p>
      </div>
    </Layout>
  );
}
