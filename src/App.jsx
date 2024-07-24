import Game from "./Game";
import Header from "./Header";
import { useEffect, useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState(6);
  const [keyword, setKeyword] = useState("cat");

  useEffect(() => {
    setScore(0);
    setBestScore(0);
  }, [difficulty, keyword]);

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

  const getKeyword = (keyword) => {
    setKeyword(keyword);
  };
  return (
    <>
      <Header
        score={score}
        bestScore={bestScore}
        getDifficulty={getDifficulty}
        getTheme={getKeyword}
      />
      <Game
        incrementScore={incrementScore}
        resetScore={resetScore}
        searchLimit={difficulty}
        searchKeyword={keyword}
      />
    </>
  );
}

export default App;
