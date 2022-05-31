import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';

export default function BookReader(props) {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>No profile data</p>;

  return (
    <Layout>
      <h1>{book.title}</h1>
    </Layout>
  );
}
