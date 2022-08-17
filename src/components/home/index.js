import React, { useState } from 'react';
import { createQuestions } from '../../assets/functions';
import { useNavigate } from 'react-router-dom';
import { STRINGS } from '../../assets/strings';
import { useRound } from '../../context/use-round';
import { useTotals } from '../../context/use-totals';
import * as svgs from '../../assets/svgs';
import "./styles.scss";

const { ADDITION, SUBSTRACTION, MULTIPLICATION, DIVISION } = STRINGS;

const { header, homeLine, trueIcon, footerText, footerCircle } = svgs;

export default function Home() {
   // console.log(question);
   const [operation, setOperation] = useState(null);
   // const [selected, setSelected] = useState(false);
   // const [selected, setSelected] = useState([false, false, false, false]);
   const navigate = useNavigate();

   const { setRound } = useRound();
   const { totals } = useTotals();

   console.log(totals.questionsSolved);

   function clickHandler() {
      const questions = createQuestions(operation);

      setRound(currentRound => {
         const { no } = currentRound;
         return { no: no + 1, score: 0, questions: questions };
      });

      navigate('/round');
   }

   return (
      <div className="body">
         <div className="container">
            <header>
               <div className="header">{header}</div>
               <div className="line">{homeLine}</div>
            </header>
            <div className="main">
               <section className="leftSection">
                  <div>Puan: {totals.score}</div>
                  <div>Çözülen Sayısı: {totals.questionsSolved}</div>
                  <div>Yanlış Sayısı: {totals.wrongAnswers}</div>
                  <div>Doğru Sayısı: {totals.correctAnswers}</div>
               </section>
               <section className="rightSection">
                  <div onClick={() => setOperation(ADDITION)}>Toplama{!!operation && trueIcon}</div>
                  <div onClick={() => setOperation(SUBSTRACTION)}>Çıkarma{!!operation && trueIcon}</div>
                  <div onClick={() => setOperation(MULTIPLICATION)}>Çarpma{!!operation && trueIcon}</div>
                  <div onClick={() => setOperation(DIVISION)}>Bölme{!!operation && trueIcon}</div>
               </section>
            </div>
            <div className="footerCircle" onClick={clickHandler}><span>{footerText}</span>{footerCircle}
            </div>
         </div>
      </div>
   );
}
