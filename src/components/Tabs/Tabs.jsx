import { useState } from 'react';
import s from './Tabs.module.css';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';

const Tabs = ({ advert }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleFeatures = () => {
    setActiveTab('features');
  };
  const handleReviews = () => {
    setActiveTab('reviews');
  };
  return (
    <div className={s.tabs}>
      <ul className={s.nav}>
        <li
          className={activeTab === 'features' ? 'active' : ''}
          onClick={handleFeatures}
        >
          <p className={s.featureP}>Features</p>
        </li>
        <li
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={handleReviews}
        >
          <p className={s.featureP}>Reviews</p>
        </li>
      </ul>
      <div className={s.outlet}>
        {activeTab &&
          (activeTab === 'features' ? (
            <Features advert={advert} />
          ) : (
            <Reviews reviews={advert.reviews} />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
