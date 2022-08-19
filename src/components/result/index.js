import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResult } from '../../context/use-result';
import Results from '../results';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { line1, line2, circleIcon, resultPage } = svgs;

export default function Result() {

   const { result, setResult } = useResult();
   const { score, correctAnswers, wrongAnswers, results } = result;
   const navigate = useNavigate();

   const clickHandler = () => {
      setResult({ score: 0, correctAnswers: 0, wrongAnswers: 0, results: [] });
      navigate('/');
   };

   return (
      <>
         <div className='container-result'>
            <div className='section-left'>
               <h2>Sonuç</h2>
               <div className='result-line'>{line1}</div>
               <div className='scores'>
                  <div>Puan:{score}</div>
                  <div>Doğru Cevap:{correctAnswers}</div>
                  <div>Yanlış Cevap:{wrongAnswers}</div>
               </div>
               <div className='svg-button' onClick={clickHandler} >
                  <span>Başa Dön</span>
                  {circleIcon}
               </div>
            </div>
            <div className='section-right'>
               <h2>Sorular</h2>
               <div className='result-line'>{line2}</div>
               <ul>
                  {results.map((question, index) => <Results key={`results-${index}`} question={question} />)}
               </ul>
            </div>
         </div>
         {/* {resultPage} */}
      </>
   );
}