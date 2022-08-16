import { createContext, useContext, useState } from "react";

export const TotalsContext = createContext();
export const useTotals = () => useContext(TotalsContext);

const initialState = { points: 0, correctAnswers: 0, wrongAnswers: 0, questions: 0 };

const Provider = (props) => {
   const [totals, setTotals] = useState(initialState);

   return (
      <TotalsContext.Provider value={{ totals }}>
         {props.children}
      </TotalsContext.Provider>
   );
};

export default Provider;