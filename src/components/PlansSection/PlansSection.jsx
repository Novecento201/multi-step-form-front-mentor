import { useContext } from 'react';
import { plans } from '../../data.js';
import { AppContext } from '../../Context.jsx';
import Switch from '@mui/material/Switch';

import './PlansSection.css';

const PlansSection = () => {
  const { selectedPlan, setSelectedPlan, isYearly, setIsYearly } =
    useContext(AppContext);

  return (
    <>
      <h2 className="section__title">Select Plan</h2>
      <p className="section__paragraph">
        You have the option of monthly or yearly billing.
      </p>
      <form className="container__plans">
        {plans.map((plan) => (
          <label
            htmlFor={plan.type}
            className={`${
              selectedPlan.type === plan.type ? 'plan selected--plan' : 'plan'
            }`}
            key={plan.id}
            onClick={(e) =>
              isYearly
                ? setSelectedPlan((prevSelectedPlan) => {
                    return {
                      ...prevSelectedPlan,
                      type: e.target.id,
                    };
                  })
                : setSelectedPlan((prevSelectedPlan) => {
                    return {
                      ...prevSelectedPlan,
                      type: e.target.id,
                    };
                  })
            }
          >
            <input
              className="plan__input"
              type="radio"
              name="plans"
              id={plan.type}
              value={plan.type}
            />
            <img src={plan.img} />
            <div>
              <h4 className="plan__title">{plan.type}</h4>
              <div className="plan__price">
                {isYearly
                  ? `$ ${plan.yearPrice}/yr`
                  : `$ ${plan.monthPrice}/mo`}
                {isYearly && <div>2 months free</div>}
              </div>
            </div>
          </label>
        ))}
      </form>

      <div className="toggler">
        <span>Monthly</span>
        <Switch
          checked={isYearly}
          onChange={() => setIsYearly((prevYear) => !prevYear)}
          color="default"
        />
        <span>Yearly</span>
      </div>
    </>
  );
};
export default PlansSection;

//todo sistmare casino del yr/month
