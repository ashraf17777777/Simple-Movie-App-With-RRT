import { useSelector, useDispatch } from "react-redux";
import { deleteMovie } from "../Slices/movieSlice";
import styled from "styled-components";

// --- Styled Components ---
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

const MovieCard = styled.div`
  background: #1e293b;
  padding: 15px 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  border-left: 5px solid #3b82f6;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02) translateX(5px);
    background: #334155;
  }
`;

const MovieTitle = styled.h3`
  color: #f8fafc;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
`;

const DeleteBtn = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #dc2626;
  }
`;

// --- Component Logic ---
function MovieList() {
  const movies = useSelector((state) => state.moviesX.moviesVar);
  const dispatch = useDispatch();

  return (
    <ListWrapper>
      <h2 style={{ color: "#94a3b8", marginBottom: "10px" }}>
        Your Collection
      </h2>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <MovieTitle>{movie.name}</MovieTitle>
          <DeleteBtn onClick={() => dispatch(deleteMovie(movie.id))}>
            Delete
          </DeleteBtn>
        </MovieCard>
      ))}
    </ListWrapper>
  );
}

export default MovieList;
