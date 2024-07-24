/* eslint-disable react/prop-types */
const Header = ({ score, bestScore, getDifficulty }) => {
  const handleDifficultyChange = (event) => {
    getDifficulty(event.target.value);
  };

  return (
    <header>
      <div>
        <h1>Memory game</h1>
        <label htmlFor="difficulty">Choose a difficulty:</label>
        <select
          id="difficulty"
          name="difficulty"
          onChange={handleDifficultyChange}
        >
          <option value={6}>Easy</option>
          <option value={10}>Medium</option>
          <option value={12}>Hard</option>
        </select>
      </div>
      <div className="scoreContainer">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
