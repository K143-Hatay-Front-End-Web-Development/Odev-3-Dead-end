import React from 'react';
import { Link } from 'react-router-dom';
import { useResult } from '../../context/use-result';
import Results from '../results';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { line, circleIcon } = svgs;

export default function Result() {

   const { result, setResult } = useResult();
   const { score, correctAnswers, wrongAnswers, results } = result;

   const startGame = () => {
      //Başla butonuna tıklandığında context'ten gelen veriler ile oyun başa döner
      setResult({ score: 0, correctAnswers: 0, wrongAnswers: 0, results: [] });
   };

   return (
      <div className='container-result'>
         <div className='section-left'>
            <h2>Sonuc</h2>
            {line}
            <div>Puan:{score}</div>
            <div>Doğru Cevap:{correctAnswers}</div>
            <div>Yanlış Cevap:{wrongAnswers}</div>
            <Link onClick={startGame} to='/'>
               <div className='startGame' /*onClick={clickHandler} */>
                  <span>Başa Dön</span>
                  {circleIcon}
               </div>
            </Link>
         </div>
         <div className='section-right'>
            <h2>Sorular</h2>
            <div>{line}</div>
            <ul className='question-list'>
               {results.map((question, index) => <Results key={`results-${index}`} question={question} />)}
            </ul>
         </div>
      </div>
   );
}