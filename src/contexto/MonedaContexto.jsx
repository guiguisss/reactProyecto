import React, { createContext, useState } from 'react'

export const MonedaContexto = createContext();
const MonedaProv = ({children}) => {
    const [deMoneda, setDeMoneda] = useState("BOB - Bolivia");
    const [aMoneda, setAMoneda] = useState("CLP - Chile");
    const [primeraCant, setPrimeraCant] = useState(0);
    
    const value = {
        deMoneda,
        setDeMoneda,
        aMoneda,
        setAMoneda,
        primeraCant,
        setPrimeraCant
    };
  return (
    <MonedaContexto.Provider value={value}>
      {children}</MonedaContexto.Provider>
  );
};

export default MonedaProv