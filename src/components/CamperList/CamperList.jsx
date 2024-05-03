import {
  selectCampers,
  selectFilters,
  selectLocation,
  selectPagination,
  selectvehicleType,
} from '../../Redux/selectors';
import { fetchAdverts } from 'Services/api';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CamperList() {
  const adverts = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const location = useSelector(selectLocation);
  const equipmentFilters = useSelector(selectFilters);
  const vehicleType = useSelector(selectvehicleType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ location, equipmentFilters, vehicleType }));
  }, [dispatch, location, equipmentFilters, vehicleType]);

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
      <LoadMoreBtn />
    </div>
  );
}

export default CamperList;
