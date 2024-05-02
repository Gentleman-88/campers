import CamperList from 'components/CamperList/CamperList';
import React from 'react';
import Filters from '../../components/Filters/Filters';

import s from './Catalog.module.css';

function Catalog() {
  return (
    <div className={s.container}>
      <Filters />
      <CamperList />
    </div>
  );
}

export default Catalog;
