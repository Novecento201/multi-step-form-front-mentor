import { useContext } from 'react';
import { AppContext } from '../../Context';

import './Pagination.css';

const Pagination = () => {
  const { page, setPage, isEnd, personalData, selectedPlan, setIsEnd } =
    useContext(AppContext);

  if (page === 1) {
    return (
      <div className="container__Pagination page__1">
        <button
          onClick={() => setPage(2)}
          className="btn__next"
        >
          Next Step
        </button>
      </div>
    );
  } else if (page === 2 || page === 3) {
    return (
      <div className="container__Pagination">
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          className="btn__back"
        >
          Go back
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="btn__next"
        >
          Next Step
        </button>
      </div>
    );
  } else if (page === 4) {
    return (
      <div className="container__Pagination">
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          className="btn__back"
        >
          Go back
        </button>
        <button
          className="btn__next"
          disabled={
            selectedPlan.type === '' ||
            personalData.name === '' ||
            personalData.email === '' ||
            personalData.phone === ''
          }
          onClick={() => setIsEnd(true)}
        >
          Confirm
        </button>
      </div>
    );
  } else if (isEnd) {
    return;
  }
};
export default Pagination;
