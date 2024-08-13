import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ score, bestScore, getDifficulty, getTheme }) => {
  const [input, setInput] = useState("");

  const handleDifficultyChange = (event) => {
    getDifficulty(event.target.value);
  };

  const handleThemeChange = (event) => {
    event.preventDefault();
    getTheme(input);
  };

  return (
    <header>
      <div className="headerInfo">
        <div className="titleAndDiffContainer">
          <h1>Memory game</h1>
          <label htmlFor="difficulty">Choose a difficulty: </label>
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
        <form className="keywordForm" action="#" onSubmit={handleThemeChange}>
          <input
            type="text"
            name="theme"
            id="themeUser"
            value={input}
            placeholder="Theme keyword"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            required
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  getDifficulty: PropTypes.func.isRequired,
  getTheme: PropTypes.func.isRequired,
};
export default Header;
