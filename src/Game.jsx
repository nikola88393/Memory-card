/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const Game = ({ incrementScore, resetScore, searchLimit }) => {
  const [photos, setPhotos] = useState([]);
  const [clickedPhotosIds, setClickedPhotosIds] = useState([]);
  const [gameOver, setGameOver] = useState({ over: false, text: "" });

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=VKKci5Qy96JPnJecC17snfZOxg3ROtDs&q=cringe&limit=${searchLimit}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhotos(data.data);
      });
  }, [searchLimit]);

  const handleClick = (id) => {
    if (clickedPhotosIds.indexOf(id) === -1) {
      setClickedPhotosIds([...clickedPhotosIds, id]);
      //if we are in this statement na the statement below is true
      //the player win because the ClickedPhotosIds will update
      //after a re-render
      if (photos.length - 1 === clickedPhotosIds.length) {
        setGameOver({ over: true, text: "You win!" });
      }
      incrementScore();
      shuffle();
    } else {
      setGameOver({ over: true, text: "You lose!" });
    }
  };

  const restartGame = () => {
    resetScore();
    setClickedPhotosIds([]);
    setGameOver({ over: false, text: "" });
  };

  const shuffle = () => {
    let photosCpy = photos.map((x) => x);
    let m = photosCpy.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = photosCpy[m];
      photosCpy[m] = photosCpy[i];
      photosCpy[i] = t;
    }

    setPhotos(photosCpy);
  };

  console.log(gameOver);

  return gameOver.over ? (
    <div className="gameOverDisplay">
      <p>{gameOver.text}</p>
      <button onClick={restartGame}>Restart</button>
    </div>
  ) : (
    <div className="imagesContainer">
      {photos.map((photo) => (
        <div className="imageCard" key={photo.id}>
          <img
            onClick={() => handleClick(photo.id)}
            className="image"
            src={photo.images.fixed_height.url}
            alt={photo.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Game;
