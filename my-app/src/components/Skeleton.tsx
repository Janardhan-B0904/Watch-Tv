import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const SkeletonBox = styled.div<{ height?: string; width?: string }>`
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const SkeletonScreen: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonBox height="40px" width="60%" />
      <SkeletonBox height="20px" width="80%" />
      <SkeletonBox height="20px" width="100%" />
      <SkeletonBox height="20px" width="90%" />
      <SkeletonBox height="20px" width="70%" />
    </SkeletonContainer>
  );
};

export default SkeletonScreen;
