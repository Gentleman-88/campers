import { FaStar } from 'react-icons/fa';
import s from './Rating.module.css';

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i}>
        <FaStar className={s.starIcon} />
      </span>
    );
  }
  return <div className={s.rating}>{stars}</div>;
};

export default Rating;
