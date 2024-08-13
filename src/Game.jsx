import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const Game = ({ incrementScore, resetScore, searchLimit, searchKeyword }) => {
  const [photos, setPhotos] = useState([]);
  const [clickedPhotosIds, setClickedPhotosIds] = useState([]);
  const [gameOver, setGameOver] = useState({ over: false, text: "" });

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=VKKci5Qy96JPnJecC17snfZOxg3ROtDs&q=${searchKeyword}&limit=${searchLimit}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhotos(data.data);
      });
  }, [searchLimit, searchKeyword]);

  const handleClick = (id) => {
    if (clickedPhotosIds.indexOf(id) === -1) {
      setClickedPhotosIds([...clickedPhotosIds, id]);
      //if we are in this statement and the statement below is true
      //the player wins because the ClickedPhotosIds will update
      //after a re-render
      if (photos.length - 1 === clickedPhotosIds.length) {
        setGameOver({ over: true, text: "You win! Good job!" });
      }
      incrementScore();
      shuffle();
    } else {
      setGameOver({ over: true, text: "You lose! Try again?" });
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

  return gameOver.over ? (
    <div className="gameOverDisplay">
      <p>{gameOver.text}</p>
      <button className="btn" onClick={restartGame}>
        Restart
      </button>
    </div>
  ) : photos.length === 0 ? (
    <div className="invalidSearchText">
      Could not find any gifs based on the theme provided
    </div>
  ) : (
    <>
      <h3 className="instructionsText">
        Click on all images, but never click on one twice!
      </h3>

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
    </>
  );
};

Game.propTypes = {
  incrementScore: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
  searchLimit: PropTypes.number.isRequired,
  searchKeyword: PropTypes.string.isRequired,
};

export default Game;
