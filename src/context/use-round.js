import { createContext, useContext, useState } from 'react';

export const RoundContext = createContext();
export const useRound = () => useContext(RoundContext);

const initialState = { no: 1, score: 0, questions: [] };

const Provider = (props) => {
   const [round, setRound] = useState(initialState);

   return (
      <RoundContext.Provider value={{ round }}>
         {props.children}
      </RoundContext.Provider>
   );
};

export default Provider;