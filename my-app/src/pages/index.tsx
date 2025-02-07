// pages/index.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import SkeletonScreen from '../components/Skeleton';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home - My Next App</title>
      </Head>
      {loading ? <SkeletonScreen /> : <h1>Welcome to the Home Page!</h1>}
    </Layout>
  );
};

export default Home;
