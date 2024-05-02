import { setPagination } from '../../Redux/Campers/campersReduser';
import { selectCampers, selectPagination } from '../../Redux/selectors';
import { fetchAdverts } from 'Services/api';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Catalog() {
  const adverts = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = pagination.page + 1;
    dispatch(setPagination({ ...pagination, page: nextPage })); // Оновлення всього об'єкта пагінації з новою сторінкою
    dispatch(fetchAdverts());
  };

  return (
    <div>
      <ul>
        {adverts.slice(0, pagination.page * pagination.limit).map(advert => (
          <li key={advert._id}>
            <img src={advert.gallery[0]} alt="camper" />
            <h2>{advert.name}</h2>
            <p>Price: {advert.price}</p>
          </li>
        ))}
      </ul>
      {adverts.length < pagination.page * pagination.limit ? null : (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}

export default Catalog;
