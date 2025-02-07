// pages/about.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const imageUrls = [
  "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=uzDy4YWgDC1bx7I6V7z4X8jRuIS3GUyF5w2euvucBwA=",
  "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=uzDy4YWgDC1bx7I6V7z4X8jRuIS3GUyF5w2euvucBwA=",
  "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=uzDy4YWgDC1bx7I6V7z4X8jRuIS3GUyF5w2euvucBwA=",
  "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=uzDy4YWgDC1bx7I6V7z4X8jRuIS3GUyF5w2euvucBwA=",
  "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=uzDy4YWgDC1bx7I6V7z4X8jRuIS3GUyF5w2euvucBwA=",
];

const About: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home - My Next App</title>
      </Head>
      <Container>
        {loading ? (
          <Grid>
            {imageUrls.map((_, index) => (
              <SkeletonCard key={index}>
                <Skeleton width="100%" height={200} borderRadius={8} />
                <Skeleton width="80%" height={20} borderRadius={8} style={{ marginTop: 8 }} />
              </SkeletonCard>
            ))}
          </Grid>
        ) : (
          <Grid>
            {imageUrls.map((url, index) => (
              <ImageCard key={index}>
                <StyledImage src={url} alt={`Image ${index + 1}`} />
                <ImageTitle>Image Number: {index + 1}</ImageTitle>
              </ImageCard>
            ))}
          </Grid>
        )}
        {!loading && <Title>Welcome to theContact!</Title>}
      </Container>
    </Layout>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 8px;
`;

const ImageTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-top: 8px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 30px;
`;
