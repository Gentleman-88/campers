import React from 'react';
import s from './Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../Redux/selectors';
import {
  addFilter,
  removeFilter,
  setLocation,
  setPagination,
  setVehicleType,
} from '../../Redux/Campers/campersReduser';
import { fetchAdverts } from 'Services/api';

function Filters() {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  const handleLocationChange = e => {
    dispatch(setLocation(e.target.value));
  };

  const handleFilterChange = e => {
    const value = e.target.value;
    if (e.target.checked) {
      dispatch(addFilter(value));
    } else {
      dispatch(removeFilter(value));
    }
  };

  const handleVehicleTypeChange = e => {
    dispatch(setVehicleType(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setPagination({ page: 1, limit: 4 }));
    dispatch(fetchAdverts());
  };

  return (
    <aside className={s.sidebar}>
      <form name="filters" onSubmit={handleSubmit}>
        <p>Location</p>
        <input
          type="text"
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={handleLocationChange}
        />
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <div className={s.select_filters}>
          <span>
            <input type="checkbox" value="ac" onChange={handleFilterChange} />
            <p>AC</p>
          </span>
          <span>
            <input
              type="checkbox"
              value="Automatic"
              onChange={handleFilterChange}
            />
            <p>Automatic</p>
          </span>
          <span>
            <input
              type="checkbox"
              value="Kitchen"
              onChange={handleFilterChange}
            />
            <p>Kitchen</p>
          </span>
          <span>
            <input type="checkbox" value="TV" onChange={handleFilterChange} />
            <p>TV</p>
          </span>
          <span>
            <input
              type="checkbox"
              value="Shower"
              onChange={handleFilterChange}
            />
            <p>Shower/WC</p>
          </span>
        </div>
        <p>Vehicle type</p>
        <div className={s.camper_types}>
          <span>
            <input
              type="radio"
              name="vehicle_type"
              value="Van"
              onChange={handleVehicleTypeChange}
            />
          </span>
          <span>
            <input
              type="radio"
              name="vehicle_type"
              value="Fully Integrated"
              onChange={handleVehicleTypeChange}
            />
          </span>
          <span>
            <input
              type="radio"
              name="vehicle_type"
              value="Alcove"
              onChange={handleVehicleTypeChange}
            />
          </span>
        </div>
        <button type="submit">Search</button>
      </form>
    </aside>
  );
}

export default Filters;
