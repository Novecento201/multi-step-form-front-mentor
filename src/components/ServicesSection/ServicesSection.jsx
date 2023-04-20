import { useContext } from 'react';
import { allServices } from '../../data.js';
import { AppContext } from '../../Context.jsx';

import './ServicesSection.css';

const ServicesSection = () => {
  const { selectedPlan, setSelectedPlan, isYearly } = useContext(AppContext);

  function handleCheck(e) {
    const { checked } = e.target;

    const id = parseInt(e.target.id);
    const newService = selectedPlan.services.slice();
    newService.forEach((service) => {
      if (service.id === id) {
        service.isChecked = checked;
      }
    });

    setSelectedPlan((prevSelectedPlan) => {
      return {
        ...prevSelectedPlan,
        services: newService,
      };
    });
  }

  return (
    <>
      <h2 className="section__title">Pick add-ons</h2>
      <p className="section__paragraph">
        Add-ons help enhance your gaming experience.
      </p>
      <form className="add-ons__container">
        {allServices.map((service) => (
          <label
            key={service.id}
            htmlFor={service.id}
            className={`${
              service.isChecked
                ? 'label__add-ons checked--service'
                : 'label__add-ons'
            }`}
          >
            <input
              type="checkbox"
              name={service.name}
              id={service.id}
              checked={service.isChecked}
              onChange={(e) => handleCheck(e)}
            />
            <div className="service__text">
              <h5 className="service__title">{service.name}</h5>
              <p className="service__description">{service.description}</p>
            </div>
            <div className="service__price">
              +$
              {isYearly
                ? `${service.yearPrice}/yr`
                : `${service.monthPrice}/mo`}
            </div>
          </label>
        ))}
      </form>
    </>
  );
};
export default ServicesSection;
