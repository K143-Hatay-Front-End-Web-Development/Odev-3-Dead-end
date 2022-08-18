import React, { useEffect, useState } from 'react';
import { STRINGS } from '../../assets/strings';
import Legend from '../legend';
import Choices from '../choices';
import { useNavigate } from 'react-router-dom';
import { useRound } from '../../context/use-round';
// import { useResult } from '../../context/use-result';
import { useTotals } from '../../context/use-totals';
import { useAnswer } from '../../context/use-answer';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { CORRECT, INCORRECT } = STRINGS;
const face = { success: svgs.face.happy, fail: svgs.face.sad, default: svgs.face.thinking };
const initialQuestion = { first: 7, operation: 'x', second: 8, points: 3, choices: [56, 49, 64] };

const dummy_results = {
   score: 120, correctAnswers: 7, wrongAnswers: 3, results: [
      { f: 2, o: 'x', s: 3, a: 6, check: true },
      { f: 7, o: '-', s: 13, a: 5, check: false },
      { f: 11, o: '/', s: 33, a: 3, check: true },
   ]
};

export default function Round() {
   const [isSelected, setIsSelected] = useState(null);
   const { round } = useRound();
   const { questions } = round;
   const [currentQuestion, setCurrentQuestion] = useState(1);
   const [question, setQuestion] = useState(questions[currentQuestion - 1]);
   // const { setResult } = useResult();
   const { setTotals } = useTotals();
   const { answer, setAnswer, set } = useAnswer();
   const { first, operation, second, choices } = question || initialQuestion;
   const navigate = useNavigate();

   function onChoiceSelect(isCorrect, index) {
      if (!answer) {
         setAnswer(isCorrect ? CORRECT : INCORRECT);
         setIsSelected(index);
         // setResult(dummy_results);
      }
   }

   useEffect(() => {
      if (answer) {
         setTotals(current => {
            return {
               score: current.score + dummy_results.score,
               correctAnswers: current.correctAnswers + dummy_results.correctAnswers,
               wrongAnswers: current.wrongAnswers + dummy_results.wrongAnswers,
               questionsSolved: current.questionsSolved + 10
            };
         });

         setTimeout(() => {
            setAnswer(null);
            setIsSelected(null);

            if (currentQuestion < 10) {
               setCurrentQuestion(x => x + 1);
               setQuestion(questions[currentQuestion - 1]);
            } else {
               navigate('/result');
            }
         }, 2000);
      }
   }, [round, setTotals, answer, setAnswer, questions, currentQuestion, setCurrentQuestion, navigate]);

   return (
      <div className='schema'>
         {svgs.schema}
         {set(face)}
         <Legend />
         <Choices choices={choices} isSelected={isSelected} onClick={onChoiceSelect} />
         <p className='question'>{`${first} ${operation} ${second}`}</p>
      </div>
   );
}