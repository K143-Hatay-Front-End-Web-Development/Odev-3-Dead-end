import { createContext, useContext, useState } from 'react';

export const ResultContext = createContext();
export const useResult = () => useContext(ResultContext);

const initialState = { score: 0, correctAnswers: 0, wrongAnswers: 0, results: [] };

const Provider = (props) => {
   const [result, setResult] = useState(initialState);

   return (
      <ResultContext.Provider value={{ result, setResult }}>
         {props.children}
      </ResultContext.Provider>
   );
};

export default Provider;