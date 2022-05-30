import Head from 'next/head';
import MainPageHeader from '../components/MainPageHeader';
import Layout from '../layout/Layout';

export default function Home() {
  return (
    <Layout>
      <MainPageHeader />
    </Layout>
  );
}
