import {
  selectCampers,
  selectFilters,
  selectLocation,
  selectPagination,
  selectvehicleType,
} from '../../Redux/selectors';
import { fetchAdverts } from 'Services/api';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5';
import s from './CamperList.module.css';
import Modal from 'components/Modal/Modal';

function CamperList() {
  const adverts = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const location = useSelector(selectLocation);
  const equipmentFilters = useSelector(selectFilters);
  const vehicleType = useSelector(selectvehicleType);
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts({ location, equipmentFilters, vehicleType }));
  }, [dispatch, location, equipmentFilters, vehicleType]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {adverts.slice(0, pagination.page * pagination.limit).map(advert => (
          <div key={advert._id} className={s.card}>
            <img src={advert.gallery[0]} alt="camper" className={s.image} />
            <div className={s.infoBox}>
              <div>
                <div className={s.header}>
                  <h3 className={s.camperName}>{advert.name.slice(0, 23)}</h3>
                  <div className={s.priceWrapper}>
                    <p className={s.price}>{advert.price}</p>
                    <button type="button" className={s.notFavoriteBtn}>
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                <div className={s.ratingWrap}>
                  <div className={s.rating}>
                    <FaStar className={s.starIcon} />
                    <p className={s.reviews}>
                      {advert.rating}({advert.reviews.length} Reviews)
                    </p>
                  </div>
                  <div className={s.locationWrap}>
                    <IoLocationOutline />
                    <p className={s.location}>{advert.location}</p>
                  </div>
                </div>
              </div>
              <p className={s.description}>
                {advert.description.slice(0, 62)}...
              </p>
              <ul className={s.options}>
                <li className={s.optionItem}>
                  {' '}
                  <IoPeopleOutline className={s.optionIcon} />{' '}
                  <p className={s.optionDesc}>{advert.adults} adults</p>
                </li>
                <li className={s.optionItem}>
                  {' '}
                  <IoPeopleOutline className={s.optionIcon} />{' '}
                  <p className={s.optionDesc}>{advert.transmission}</p>
                </li>
                <li className={s.optionItem}>
                  {' '}
                  <IoPeopleOutline className={s.optionIcon} />{' '}
                  <p className={s.optionDesc}>{advert.engine}</p>
                </li>
                <li className={s.optionItem}>
                  {' '}
                  <IoPeopleOutline className={s.optionIcon} />{' '}
                  <p className={s.optionDesc}>kitchen</p>
                </li>
                <li className={s.optionItem}>
                  {' '}
                  <IoPeopleOutline className={s.optionIcon} />{' '}
                  <p className={s.optionDesc}>{advert.details.beds} beds</p>
                </li>
                <li className={s.optionItem}>
                  {' '}
                  <IoPeopleOutline className={s.optionIcon} />{' '}
                  <p className={s.optionDesc}>AC</p>
                </li>
              </ul>
              <button
                type="button"
                className={s.showMoreBtn}
                onClick={openModal}
              >
                Show more
              </button>
              {isOpenModal ? (
                <Modal onClose={closeModal} advert={advert} />
              ) : null}
            </div>
          </div>
        ))}
      </ul>
      <LoadMoreBtn />
    </div>
  );
}

export default CamperList;
