import { useContext } from 'react';
import { AppContext } from '../../Context';
import './Sidebar.css';

const Sidebar = () => {
  const { page, setPage, isEnd } = useContext(AppContext);

  return (
    <div className="container__sidebar">
      <button
        className={` ${
          page === 1 ? 'sidebar__btn btn--active' : 'sidebar__btn'
        }`}
        onClick={() => setPage(1)}
        disabled={isEnd}
      >
        <div className="btn__number">1</div>
        <div className="btn__info">
          <span>STEP 1</span>
          <p>YOUR INFO</p>
        </div>
      </button>
      <button
        className={` ${
          page === 2 ? 'sidebar__btn btn--active' : 'sidebar__btn'
        }`}
        onClick={() => setPage(2)}
        disabled={isEnd}
      >
        <div className="btn__number">2</div>
        <div className="btn__info">
          <span>STEP 2</span>
          <p>SELECT PLAN</p>
        </div>
      </button>
      <button
        className={` ${
          page === 3 ? 'sidebar__btn btn--active' : 'sidebar__btn'
        }`}
        onClick={() => setPage(3)}
        disabled={isEnd}
      >
        <div className="btn__number">3</div>
        <div className="btn__info">
          <span>STEP 3</span>
          <p>ADD-ONS</p>
        </div>
      </button>
      <button
        className={` ${
          page === 4 ? 'sidebar__btn btn--active' : 'sidebar__btn'
        }`}
        onClick={() => setPage(4)}
        disabled={isEnd}
      >
        <div className="btn__number">4</div>
        <div className="btn__info">
          <span>STEP 4</span>
          <p>SUMMARY</p>
        </div>
      </button>
    </div>
  );
};
export default Sidebar;
