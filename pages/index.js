import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainPageHeader from '../components/MainPageHeader';
import Layout from '../layout/Layout';

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://gnikdroy.pythonanywhere.com/api/book')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <Layout>
      <MainPageHeader />
      <div>
        {data.results.map((book, index) => (
          <div key={index}>
            <h1>{book.title}</h1>
            <Link href={`/reader/${book.id}`} passHref>
              <h2>
                {
                  book.resources.find(
                    ({ type }) => type === 'application/epub+zip'
                  ).uri
                }
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
