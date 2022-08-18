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
   const { answer, setAnswer, set } = useAnswer();
   const { setTotals } = useTotals();
   const { round } = useRound();
   // const { setResult } = useResult();
   const navigate = useNavigate();

   const { score, no, questions } = round;

   const [isSelected, setIsSelected] = useState(null);
   const [questionCounter, setQuestionCounter] = useState(1);
   const [question, setQuestion] = useState(questions[questionCounter - 1]);

   const { first, operation, second, choices } = question || initialQuestion;

   function onChoiceSelect(isCorrect, index) {
      if (!answer) {
         setAnswer(isCorrect ? CORRECT : INCORRECT);
         setIsSelected(index);
         // setResult(dummy_results);
      }
   }

   // console.log('comp', questionCounter, questions[questionCounter], question);

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
         // console.log('effect', questionCounter, questions[questionCounter], question);
         setTimeout(() => {
            setAnswer(null);
            setIsSelected(null);

            if (questionCounter < 10) {
               setQuestionCounter(x => x + 1);
               setQuestion(questions[questionCounter]);
            } else {
               navigate('/result');
            }
         }, 2000);
      }
   }, [round, setTotals, answer, setAnswer,/* question,*/ questions, questionCounter, setQuestionCounter, navigate]);
   // delete question

   return (
      <>
         <div className='schema'>
            {svgs.schema}
            {set(face)}
            <Legend score={score} no={no} questionCounter={questionCounter} />
            <Choices choices={choices} isSelected={isSelected} onClick={onChoiceSelect} />
            <p className='question'>{`${first} ${operation} ${second}`}</p>
         </div>
         {/* {svgs.check} */}
      </>
   );
}