import { useContext } from 'react';
import { AppContext } from '../../Context';
import { plans } from '../../data.js';

import './SummarySection.css';

const SummarySection = () => {
  const { personalData, selectedPlan, setPage, isYearly } =
    useContext(AppContext);

  const { type, services } = selectedPlan;

  const planArray = plans?.filter((plan) => plan.type === type);
  const planMoney = isYearly
    ? planArray[0]?.yearPrice
    : planArray[0]?.monthPrice;

  const selectedServices = services.filter((service) => service.isChecked);

  const servicesMoney = selectedServices.map((service) => {
    return isYearly ? service.yearPrice : service.monthPrice;
  });

  let totalMoney =
    servicesMoney.reduce((acc, price) => {
      return (acc += price);
    }, 0) + planMoney;

  if (
    !personalData.name ||
    !personalData.email ||
    !personalData.phone ||
    !type
  ) {
    return (
      <>
        <h2 className="section__title">Finishing up</h2>
        <p className="section__paragraph">
          Double-check everything looks OK before confirming.
        </p>
        <p className="summary__warning">
          Please, fill up the form to see the summary and confirm.
        </p>
      </>
    );
  } else {
    return (
      <>
        <h2 className="section__title">Finishing up</h2>
        <p className="section__paragraph">
          Double-check everything looks OK before confirming.
        </p>

        <div className="container__summary">
          <div className="container__header__summary">
            <div>
              <p className="summary__title">
                {type} ({isYearly ? 'Yearly' : 'Monthly'})
              </p>
              <button
                onClick={() => setPage(2)}
                className="change__btn"
              >
                Change
              </button>
            </div>
            <div className="title__price">
              ${planMoney}
              {isYearly ? '/yr' : '/mo'}
            </div>
          </div>

          <hr />

          <div className="container__services">
            {selectedServices.length === 0 ? (
              <div className="no__serviced__added">No add-ons selected.</div>
            ) : (
              <div>
                {selectedServices.map((service) => (
                  <div
                    key={service.id}
                    className="summary__service__container"
                  >
                    <h5 className="summary__service__title">{service.name}</h5>
                    <div className="summary__service__price">
                      +$
                      {isYearly
                        ? `${service.yearPrice}/yr`
                        : `${service.monthPrice}/mo`}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="summary__total">
          <p className="total__text">
            Total ({isYearly ? 'per year' : 'per month'})
          </p>
          <p className="total__price">
            +${totalMoney}/{isYearly ? 'yr' : 'mo'}
          </p>
        </div>
      </>
    );
  }
};
export default SummarySection;
