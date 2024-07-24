import { useState } from "react";

/* eslint-disable react/prop-types */
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
      <div className="themeOptions">
        <form action="#" onSubmit={handleThemeChange}>
          <label htmlFor="themeUser">Change theme on a keyword: </label>
          <input
            type="text"
            name="theme"
            id="themeUser"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <p>Click on all images, but never click on one twice!</p>
    </header>
  );
};

export default Header;
