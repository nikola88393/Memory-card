import Game from "./Fetch";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };
  const resetScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Game incrementScore={incrementScore} resetScore={resetScore} />
    </>
  );
}

export default App;
