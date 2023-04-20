import { useContext } from 'react';
import { AppContext } from '../../Context';
import Pagination from '../Pagination/Pagination';
import EndSection from '../EndSection/EndSection';
import PersonalDataSection from '../PersonalDataSection/PersonalDataSection';
import PlansSection from '../PlansSection/PlansSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import SummarySection from '../SummarySection/SummarySection';

import './FormPage.css';

const FormPage = () => {
  const { page, isEnd } = useContext(AppContext);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <PersonalDataSection />;
      case 2:
        return <PlansSection />;
      case 3:
        return <ServicesSection />;
      case 4:
        return <SummarySection />;
      default:
        return <PersonalDataSection />;
    }
  };

  return (
    <div className="container__formPage">
      {isEnd ? (
        <EndSection />
      ) : (
        <>
          {renderPage()}
          <Pagination />
        </>
      )}
    </div>
  );
};
export default FormPage;
