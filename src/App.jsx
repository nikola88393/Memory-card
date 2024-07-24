import Game from "./Game";
import Header from "./Header";
import { useEffect, useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState(6);

  useEffect(() => {
    setScore(0);
    setBestScore(0);
  }, [difficulty]);

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
