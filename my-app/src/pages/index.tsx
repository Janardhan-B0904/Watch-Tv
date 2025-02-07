// pages/index.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import SkeletonScreen from '../components/Skeleton';
import HomeContent from '@/components/HomeContent';

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
      {loading ? <SkeletonScreen /> : <HomeContent/>}
    </Layout>
  );
};

export default Home;
