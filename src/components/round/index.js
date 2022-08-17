import React, { useEffect, useState } from 'react';
import { STRINGS } from '../../assets/strings';
import Legend from '../legend';
import Choices from '../choices';
import { useNavigate } from 'react-router-dom';
import { useRound } from '../../context/use-round';
import { useResult } from '../../context/use-result';
import { useTotals } from '../../context/use-totals';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { CORRECT, INCORRECT, SCHEMA } = STRINGS;
const schema = { success: `${SCHEMA} ${CORRECT}`, fail: `${SCHEMA} ${INCORRECT}`, default: SCHEMA };
const face = { success: svgs.face.happy, fail: svgs.face.sad, default: svgs.face.thinking };
const question = { first: 7, operation: 'x', second: 8, points: 3, choices: [56, 49, 64] };

const dummy_results = {
   score: 120, correctAnswers: 7, wrongAnswers: 3, results: [
      { f: 2, o: 'x', s: 3, a: 6, check: true },
      { f: 7, o: '-', s: 13, a: 5, check: false },
      { f: 11, o: '/', s: 33, a: 3, check: true },
   ]
};

export default function Round() {
   const [answer, setAnswer] = useState(null);
   const [isSelected, setIsSelected] = useState(null);
   const set = values => answer === CORRECT ? values.success : answer === INCORRECT ? values.fail : values.default;
   const { round } = useRound();
   const { setResult } = useResult();
   const { first, operation, second, choices } = round.questions[3] || question;
   const navigate = useNavigate();
   const { totals, setTotals } = useTotals();

   useEffect(() => {
      setTotals(currentTotals => {
         const { score, correctAnswers, wrongAnswers, questionsSolved } = currentTotals;
         return {
            score: score + dummy_results.score,
            correctAnswers: correctAnswers + dummy_results.correctAnswers,
            wrongAnswers: wrongAnswers + dummy_results.wrongAnswers,
            questionsSolved: questionsSolved + 10
         };
      });
   }, [round]);


   function clickHandler(isCorrect, index) {
      if (!answer) {
         setAnswer(isCorrect ? CORRECT : INCORRECT);
         setIsSelected(index);
         setResult(dummy_results);
         navigate('/result');
      }
   }

   return (
      <>
         <div className={set(schema)}>
            {svgs.schema}
            {set(face)}
            <Legend />
            <Choices choices={choices} isSelected={isSelected} onClick={clickHandler} />
            <p className='question'>{`${first} ${operation} ${second}`}</p>
            {/* <div className='check'> */}
            {/* {answer === CORRECT ? svgs.checkCorrect : answer === INCORRECT ? svgs.checkIncorrect : svgs.check} */}
            {/* {svgs.check} */}
            {/* {svgs.checkCorrect} */}
            {/* {svgs.checkIncorrect} */}
            {/* </div> */}
            {/* <div style={{ height: '60rem' }}></div> */}
         </div>
      </>
   );
}