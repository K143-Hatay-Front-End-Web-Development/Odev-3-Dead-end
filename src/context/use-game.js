import { createContext, useContext, useState } from 'react';
import { STRINGS } from '../assets/strings';

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

const { CORRECT, INCORRECT } = STRINGS;

const initialTotalsState = { score: 0, correctAnswers: 0, wrongAnswers: 0, questionsSolved: 0 };
const initialRoundState = { no: 0, score: 0, questions: [] };
const initialResultState = { score: 0, correctAnswers: 0, wrongAnswers: 0, results: [] };

const Provider = (props) => {
   const [answer, setAnswer] = useState(null);
   const [totals, setTotals] = useState(initialTotalsState);
   const [round, setRound] = useState(initialRoundState);
   const [result, setResult] = useState(initialResultState);

   const set = values => answer === CORRECT ? values.success : answer === INCORRECT ? values.fail : values.default;

   const check = (index) => index === 0;

   return (
      <GameContext.Provider
         value={{ answer, setAnswer, set, check, totals, setTotals, round, setRound, result, setResult }}
      >
         {props.children}
      </GameContext.Provider>
   );
};

export default Provider;