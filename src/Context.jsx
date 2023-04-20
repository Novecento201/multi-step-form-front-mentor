import { useState, createContext } from 'react';
import { allServices } from './data.js';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function onChangePersonalData(e) {
    const { name, value } = e.target;
    setPersonalData((prevPersonalData) => {
      return {
        ...prevPersonalData,
        [name]: value,
      };
    });
  }

  const [isYearly, setIsYearly] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState({
    type: '',
    services: allServices,
  });

  const [page, setPage] = useState(1);

  const [isEnd, setIsEnd] = useState(false);

  return (
    <AppContext.Provider
      value={{
        personalData,
        onChangePersonalData,
        selectedPlan,
        isYearly,
        setSelectedPlan,
        setIsYearly,
        page,
        setPage,
        isEnd,
        setIsEnd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
