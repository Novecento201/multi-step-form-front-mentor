import { useContext } from 'react';
import './PersonalDataSection.css';
import { AppContext } from '../../Context';

const PersonalDataSection = () => {
  const { personalData, onChangePersonalData } = useContext(AppContext);

  return (
    <>
      <h2 className="section__title">Personal Info</h2>
      <p className="section__paragraph">
        Please provide your name, email address, and phone number.
      </p>
      <form className="personalData__form">
        <label
          htmlFor="name"
          className="personalData__label"
        >
          Name
        </label>
        <input
          placeholder="e.g Stephen King"
          className="personalData__input"
          type="text"
          name="name"
          value={personalData.name}
          onChange={(e) => onChangePersonalData(e)}
          required
        />
        <label
          htmlFor="email"
          className="personalData__label"
        >
          Email
        </label>
        <input
          placeholder="e.g stephenking@lorem.com"
          className="personalData__input"
          type="email"
          name="email"
          value={personalData.email}
          onChange={(e) => onChangePersonalData(e)}
          required
        />
        <label
          htmlFor="phone"
          className="personalData__label"
        >
          Phone
        </label>
        <input
          placeholder="e.g. +1 234 567 890"
          className="personalData__input"
          type="text"
          name="phone"
          value={personalData.phone}
          onChange={(e) => onChangePersonalData(e)}
          required
        />
      </form>
    </>
  );
};
export default PersonalDataSection;
