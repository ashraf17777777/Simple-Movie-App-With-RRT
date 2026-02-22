import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../Slices/movieSlice";
import styled from "styled-components";

// --- Styled Components ---
const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledInput = styled.input`
  padding: 12px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  background: #1e293b;
  color: white;
  flex: 1;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #3b82f6;
  }
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 10px 25px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
  }
  &:active {
    transform: translateY(0);
  }
`;

// --- Component Logic ---
function MovieInput() {
  const [newMov, setNewMov] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (newMov.trim()) {
      dispatch(addMovie(newMov));
      setNewMov("");
    }
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="Add a new movie..."
        onChange={(e) => setNewMov(e.target.value)}
        value={newMov}
      />
      <AddButton onClick={handleClick}>Add Movie</AddButton>
    </InputContainer>
  );
}

export default MovieInput;
