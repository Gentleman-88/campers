import React, { useEffect, useState } from 'react';
import CamperCard from '../../components/CamperCard/CamperCard';
import s from './Favorite.module.css';

const Favorites = () => {
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCampers(favoritesFromStorage);
  }, []);
  return (
    <div className={s.container}>
      {favoriteCampers.length === 0 ? (
        <h1>You don't have favorite campers yet!</h1>
      ) : (
        <>
          <h1>Your favorites</h1>
          <ul className={s.list}>
            {favoriteCampers.map(camp => (
              <CamperCard key={camp._id} advert={camp} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Favorites;
