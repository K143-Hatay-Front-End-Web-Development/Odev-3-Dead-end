import { createContext, useContext, useState } from 'react';
import { STRINGS } from '../assets/strings';

export const AnswerContext = createContext();
export const useAnswer = () => useContext(AnswerContext);

const { CORRECT, INCORRECT } = STRINGS;

const Provider = (props) => {
   const [answer, setAnswer] = useState(null);

   const set = values => answer === CORRECT ? values.success : answer === INCORRECT ? values.fail : values.default;

   return (
      <AnswerContext.Provider value={{ answer, setAnswer, set }}>
         {props.children}
      </AnswerContext.Provider>
   );
};

export default Provider;