import React, { useState } from 'react';
import { createQuestions } from '../../assets/functions';
import { useNavigate } from 'react-router-dom';
import { STRINGS } from '../../assets/strings';
import { useRound } from '../../context/use-round';
import { useTotals } from '../../context/use-totals';
import * as svgs from '../../assets/svgs';
import './styles.scss';
import Operation from '../operation';

const { ADDITION, SUBSTRACTION, MULTIPLICATION, DIVISION } = STRINGS;

const { header, homeLine, footerText, footerCircle } = svgs;

const operations = [
   { type: ADDITION, label: 'Toplama' },
   { type: SUBSTRACTION, label: 'Çıkarma' },
   { type: MULTIPLICATION, label: 'Çarpma' },
   { type: DIVISION, label: 'Bölme' },
];

export default function Home() {
   const [operation, setOperation] = useState(null);
   const { totals } = useTotals();
   const { setRound } = useRound();
   const navigate = useNavigate();
   const [selectedIndex, setSelectedIndex] = useState(null);


   console.log(totals.questionsSolved);

   function clickHandler() {
      const questions = createQuestions(operation);

      setRound(currentRound => {
         const { no } = currentRound;
         return { no: no + 1, score: 0, questions: questions };
      });

      navigate('/round');
   }

   function onOperationSelect(type, index) {
      setOperation(type);
      setSelectedIndex(index);
   }

   return (
      // <div className='body'>
      <div className='container'>
         <header>
            <div className='header'>{header}</div>
            <div className='line'>{homeLine}</div>
         </header>
         <div className='main'>
            <section className='leftSection'>
               <div>Puan: {totals.score}</div>
               <div>Çözülen Sayısı: {totals.questionsSolved}</div>
               <div>Yanlış Sayısı: {totals.wrongAnswers}</div>
               <div>Doğru Sayısı: {totals.correctAnswers}</div>
            </section>
            <section className='rightSection'>
               {operations.map((item, index) =>
                  <Operation
                     key={`operation-${index}`}
                     selected={index === selectedIndex}
                     label={item.label}
                     onClick={() => onOperationSelect(item.type, index)}
                  />
               )}
            </section>
         </div>
         <div className='footerCircle' onClick={clickHandler}><span>{footerText}</span>{footerCircle}
         </div>
      </div>
      // </div>
   );
}
