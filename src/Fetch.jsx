/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const Game = ({ incrementScore, resetScore, searchLimit }) => {
  const [photos, setPhotos] = useState([]);
  const [clickedPhotosIds, setClickedPhotosIds] = useState([]);

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
      incrementScore();
      shuffle();
    } else {
      resetScore();
      setClickedPhotosIds([]);
    }
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

  return (
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
