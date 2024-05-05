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

import s from './CamperList.module.css';
import CamperCard from 'components/CamperCard/CamperCard';

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
    <div className={s.container}>
      <ul className={s.list}>
        {adverts.slice(0, pagination.page * pagination.limit).map(advert => (
          <CamperCard key={advert._id} advert={advert} />
        ))}
      </ul>

      <LoadMoreBtn />
    </div>
  );
}

export default CamperList;
