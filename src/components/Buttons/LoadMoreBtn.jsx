import { setPagination } from '../../Redux/Campers/campersReduser';
import { selectCampers, selectPagination } from '../../Redux/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './LoadMoreBtn.module.css';

function LoadMoreBtn() {
  const adverts = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    const nextPage = pagination.page + 1;
    dispatch(setPagination({ ...pagination, page: nextPage }));
  };

  return (
    <>
      {adverts.length < pagination.page * pagination.limit ? (
        <p className={s.noMore}>No more campers</p>
      ) : (
        <button onClick={handleLoadMore} className={s.btn}>
          Load more
        </button>
      )}
    </>
  );
}

export default LoadMoreBtn;
