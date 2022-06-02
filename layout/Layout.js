import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Layout({ title, children, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - BookGarden` : 'BookGarden'}</title>
        {description && <meta name='description' content={description} />}
        <link rel='shortcut icon' href='/bgicon.ico' />
      </Head>

      <main className=' min-h-screen max-w-5xl pb-10 mx-auto relative'>
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
}
