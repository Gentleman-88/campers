import { useEffect } from 'react';
import s from './Modal.module.css';
import { IoClose, IoLocationOutline } from 'react-icons/io5';
import Tabs from 'components/Tabs/Tabs';
const Modal = ({ isOpen, onClose, advert }) => {
  const { name, rating, reviews, location, price, gallery, description } =
    advert;

  const onWrapperClick = e => {
    if (e.target.classList.contains(s.overlay)) {
      onClose();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    } else {
      document.removeEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={s.overlay} onClick={onWrapperClick}>
      <div className={s.modal}>
        <div className={s.header}>
          <div className={s.modalHeader}>
            <h3 className={s.name}>{name}</h3>
            <button type="button" className={s.modalCloseBtn} onClick={onClose}>
              <IoClose className={s.modalCloseIcon} />
            </button>
          </div>
          <div className={s.infoBox}>
            <div className={s.reviewLocation}>
              <div className={s.reviewWrap}>
                ⭐
                <p className={s.review}>
                  {rating}({reviews.length} Reviews)
                </p>
              </div>
              <div className={s.location}>
                <IoLocationOutline />
                <p className={s.locationP}>{location}</p>
              </div>
            </div>
            <p className={s.price}>€{price}</p>
          </div>
        </div>
        <ul className={s.imageList}>
          {gallery.map((image, index) => (
            <li key={index}>
              <div
                className={s.image}
                style={{ backgroundImage: `url(${gallery[index]})` }}
              ></div>
            </li>
          ))}
        </ul>
        <p className={s.description}>{description}</p>
        <Tabs advert={advert} className={s.tabs} />
      </div>
    </div>
  );
};

export default Modal;
