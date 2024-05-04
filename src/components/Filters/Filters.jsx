import React from 'react';
import s from './Filters.module.css';

function Filters() {
  return (
    <aside className={s.sidebar}>
      <form name="filters">
        <p className={s.location}>Location</p>
        <input type="text" placeholder="City" className={s.location_input} />
        <p className={s.filters}>Filters</p>
        <p className={s.equipment}>Vehicle equipment</p>
        <div className={s.select_filters}>
          <input
            id="ac"
            type="checkbox"
            value="mechanic"
            class={`${s.visually_hidden} ${s.input}`}
          />
          <label for="ac" class={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>AC</p>
            </span>
          </label>
          <input
            id="Automatic"
            type="checkbox"
            value="mechanic"
            class={`${s.visually_hidden} ${s.input}`}
          />
          <label for="Automatic" class={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>Automatic</p>
            </span>
          </label>
          <input
            id="Kitchen"
            type="checkbox"
            value="mechanic"
            class={`${s.visually_hidden} ${s.input}`}
          />
          <label for="Kitchen" class={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>Kitchen</p>
            </span>
          </label>
          <input
            id="TV"
            type="checkbox"
            value="mechanic"
            class={`${s.visually_hidden} ${s.input}`}
          />
          <label for="TV" class={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>TV</p>
            </span>
          </label>
          <input
            id="Shower"
            type="checkbox"
            value="mechanic"
            class={`${s.visually_hidden} ${s.input}`}
          />
          <label for="Shower" class={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>Shower/WC</p>
            </span>
          </label>
        </div>
        <p className={s.equipment}>Vehicle type</p>
        <div className={s.select_filters}>
          <input
            id="Van"
            type="radio"
            name="vehicle_type"
            value="Van"
            className={`${s.visually_hidden} ${s.input}`}
          />
          <label for="Van" className={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>Van</p>
            </span>
          </label>
          <input
            id="Fully"
            type="radio"
            name="vehicle_type"
            value="Fully Integrated"
            className={`${s.visually_hidden} ${s.input}`}
          />
          <label for="Fully" className={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>Fully Integrated</p>
            </span>
          </label>
          <input
            id="Alcove"
            type="radio"
            name="vehicle_type"
            value="Alcove"
            className={`${s.visually_hidden} ${s.input}`}
          />
          <label for="Alcove" className={s.filter_check}>
            <span className={s.data_check_svg}>
              <p className={s.filter_type}>Alcove</p>
            </span>
          </label>
        </div>
        <button type="submit" className={s.search_btn}>
          Search
        </button>
      </form>
    </aside>
  );
}

export default Filters;
