import styled from "styled-components";
import MovieInput from "./components/MovieInput";
import MovieList from "./components/MovieList";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a; /* Dark background */
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3b82f6;
  font-weight: 800;
  margin-bottom: 40px;
  text-align: center;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
`;

function App() {
  return (
    <MainContainer>
      <Title>Movie Tracker 🎬</Title>
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <MovieInput />
        <MovieList />
      </div>
    </MainContainer>
  );
}

export default App;
