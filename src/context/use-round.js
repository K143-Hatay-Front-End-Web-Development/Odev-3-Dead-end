import { createContext, useContext, useState } from "react";

export const RoundContext = createContext();
export const useRound = () => useContext(RoundContext);

const initialState = { roundNumber: 0, totalPoints: 0, totalCorrectAnswers: 0, totalWrongAnswers: 0, questions: [] };

const Provider = (props) => {
   const [round, setRound] = useState(initialState);

   return (
      <RoundContext.Provider value={{ round }}>
         {props.children}
      </RoundContext.Provider>
   );
};

export default Provider;