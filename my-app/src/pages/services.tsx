// pages/services.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import SkeletonScreen from '@/components/Skeleton';

const Services: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2000); // Simulate loading
    }, []);
  
    return (
      <Layout>
        <Head>
          <title>Home - My Next App</title>
        </Head>
        {loading ? <SkeletonScreen /> : <h1>Welcome to theContact!</h1>}
      </Layout>
    );
  };

export default Services;
