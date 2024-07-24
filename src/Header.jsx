import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Header = ({ score, bestScore, getDifficulty }) => {
  const [difficulty, setDifficulty] = useState(6);

  useEffect(() => {
    if (getDifficulty) {
      getDifficulty(difficulty);
    }
  }, [difficulty, getDifficulty]);

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <header>
      <h1>Memory game</h1>
      <div className="scoreContainer">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <label htmlFor="difficulty">Choose a difficulty:</label>
      <select
        id="difficulty"
        name="difficulty"
        value={difficulty}
        onChange={handleDifficultyChange}
      >
        <option value={6}>Easy</option>
        <option value={10}>Medium</option>
        <option value={12}>Hard</option>
      </select>
    </header>
  );
};

export default Header;
