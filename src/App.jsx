import Game from "./Fetch";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState("6");

  const incrementScore = () => {
    setScore(score + 1);
  };
  const resetScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
  };
  const getDifficulty = (diff) => {
    setDifficulty(diff);
  };
  return (
    <>
      <Header
        score={score}
        bestScore={bestScore}
        getDifficulty={getDifficulty}
      />
      <Game
        incrementScore={incrementScore}
        resetScore={resetScore}
        searchLimit={difficulty}
      />
    </>
  );
}

export default App;
