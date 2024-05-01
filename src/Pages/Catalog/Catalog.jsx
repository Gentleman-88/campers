import { setCurrentPage } from '../../Redux/actions';
import { selectCampers, selectCurrentPage } from '../../Redux/selectors';
import { fetchAdverts } from 'Services/api';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Catalog() {
  const adverts = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const itemsPerPage = 4;
  const totalAdverts = adverts.length;

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    if (nextPage * itemsPerPage <= totalAdverts) {
      dispatch(setCurrentPage(nextPage));
    }
  };

  return (
    <div>
      <ul>
        {adverts.slice(0, currentPage * itemsPerPage).map(advert => (
          <li key={advert._id}>
            <img src={advert.gallery[0]} alt="camper" />
            <h2>{advert.name}</h2>
            <p>Price: {advert.price}</p>
          </li>
        ))}
      </ul>
      {currentPage * itemsPerPage < totalAdverts && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default Catalog;
