import React, { Suspense } from 'react';
import s from './Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header className={s.header}>
        <NavLink to="/" className={s.navBtn}>
          Home
        </NavLink>
        <>
          <NavLink to="/catalog" className={s.navBtn}>
            Catalog
          </NavLink>
        </>
        <>
          <NavLink to="/favorites" className={s.navBtn}>
            Favorite
          </NavLink>
        </>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Navigation;
