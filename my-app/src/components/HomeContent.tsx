import React from "react";

const HomeContent: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Welcome Section */}
      <header style={styles.header}>
        <h1>Welcome to Live TV Streaming</h1>
        <p>Watch your favorite channels live, anytime, anywhere.</p>
      </header>

      {/* Live TV Section */}
      <section style={styles.liveTvSection}>
        <h2>Live TV</h2>
        <div style={styles.videoContainer}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/watch?v=NAeLxYMqBQc" // BBC News Live (Dummy Example)
            title="Live TV Streaming"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    backgroundColor: "#f4f4f4",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
  },
  liveTvSection: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  videoContainer: {
    position: "relative" as const,
    paddingBottom: "56.25%", // Aspect ratio for 16:9
    height: "0",
    overflow: "hidden",
  },
};

export default HomeContent;
