import React, { useEffect, useState } from 'react';
import s from './CamperCard.module.css';
import Modal from 'components/Modal/Modal';

import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5';

function CamperCard({ advert }) {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    details,
    engine,
    transmission,
    adults,
  } = advert;

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isAdvertFavorite = favorites.some(
      favAdvert => favAdvert._id === advert._id
    );
    return isAdvertFavorite;
  });
  const [id] = useState(advert._id);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAdvertAlreadyFavorite = favorites.some(
      favAdvert => favAdvert._id === id
    );

    if (!isAdvertAlreadyFavorite) {
      const updatedFavorites = isFavorite
        ? [...favorites, advert]
        : favorites.filter(favAdvert => favAdvert._id !== id);

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      if (!isFavorite) {
        const updatedFavorites = favorites.filter(
          favAdvert => favAdvert._id !== id
        );
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
    }
  }, [isFavorite]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <div className={s.card}>
        <img src={gallery[0]} alt="camper" className={s.image} />
        <div className={s.infoBox}>
          <div>
            <div className={s.header}>
              <h3 className={s.camperName}>{name.slice(0, 23)}</h3>
              <div className={s.priceWrapper}>
                <p className={s.price}>{price}</p>
                <button
                  type="button"
                  className={isFavorite ? s.favoriteBtn : s.notFavoriteBtn}
                  onClick={toggleFavorite}
                >
                  {isFavorite ? (
                    <FaHeart className={s.favorite} />
                  ) : (
                    <FaRegHeart className={s.notFavorite} />
                  )}
                </button>
              </div>
            </div>
            <div className={s.ratingWrap}>
              <div className={s.rating}>
                <FaStar className={s.starIcon} />
                <p className={s.reviews}>
                  {rating}({reviews.length} Reviews)
                </p>
              </div>
              <div className={s.locationWrap}>
                <IoLocationOutline />
                <p className={s.location}>{location}</p>
              </div>
            </div>
          </div>
          <p className={s.description}>{description.slice(0, 62)}...</p>
          <ul className={s.options}>
            <li className={s.optionItem}>
              {' '}
              <IoPeopleOutline className={s.optionIcon} />{' '}
              <p className={s.optionDesc}>{adults} adults</p>
            </li>
            <li className={s.optionItem}>
              {' '}
              <IoPeopleOutline className={s.optionIcon} />{' '}
              <p className={s.optionDesc}>{transmission}</p>
            </li>
            <li className={s.optionItem}>
              {' '}
              <IoPeopleOutline className={s.optionIcon} />{' '}
              <p className={s.optionDesc}>{engine}</p>
            </li>
            <li className={s.optionItem}>
              {' '}
              <IoPeopleOutline className={s.optionIcon} />{' '}
              <p className={s.optionDesc}>kitchen</p>
            </li>
            <li className={s.optionItem}>
              {' '}
              <IoPeopleOutline className={s.optionIcon} />{' '}
              <p className={s.optionDesc}>{details.beds} beds</p>
            </li>
            <li className={s.optionItem}>
              {' '}
              <IoPeopleOutline className={s.optionIcon} />{' '}
              <p className={s.optionDesc}>AC</p>
            </li>
          </ul>
          <button type="button" className={s.showMoreBtn} onClick={openModal}>
            Show more
          </button>
          {isOpenModal ? <Modal onClose={closeModal} advert={advert} /> : null}
        </div>
      </div>
    </div>
  );
}

export default CamperCard;
