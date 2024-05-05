import React from 'react';
import s from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome to our <span className={s.span}>camper rental</span> website!
      </h1>
      <p className={s.description}>
        Travel with comfort and freedom, choosing the perfect camper for your
        adventures. Our collection includes various models to meet all your
        needs and budgets. Embark on unforgettable vacations, explore new
        places, and preserve the best memories.
      </p>
      <div className={s.btns}>
        <NavLink to="/catalog" className={s.btn}>
          To campers
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
