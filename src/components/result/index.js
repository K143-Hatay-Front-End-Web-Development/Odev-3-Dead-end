import React from "react";
import { Link } from 'react-router-dom';
import { useResult } from '../../context/use-result';
import * as svgs from '../../assets/svgs';
import "./styles.scss";

const dummy_results = {
   score: 120, correctAnswers: 7, wrongAnswers: 3, results: [
      { f: 2, o: 'x', s: 3, a: 6, check: true },
      { f: 17, o: '-', s: 53, a: 15, check: true },
      { f: 11, o: '/', s: 33, a: 3, check: true },
   ]
};

export default function Result() {

   const { result } = useResult();


   const { line, circleIcon, falseIcon, trueIcon } = svgs;
   const { f, o, s, a, check } = result.results[1] || dummy_results.results[1];

   const startGame = () => {

      //Başla butonuna tıklandığında context'ten gelen veriler ile oyun başa döner 

   };

   return (
      <div className="container-result">
         <div className="section-left">
            <h2>Sonuc</h2>
            {line}
            <div>Puan:{result.score}</div>
            <div>Doğru Cevap:{result.correctAnswers}</div>
            <div>Yanlış Cevap:{result.wrongAnswers}</div>
            <Link onClick={startGame} to="/">
               <div className="startGame" /*onClick={clickHandler} */>
                  <span>Başa Dön</span>
                  {circleIcon}
               </div>
            </Link>
         </div>
         <div className="section-right">
            <h2>Sorular</h2>
            <div>{line}</div>
            <ul className="question-list">
               <li>{f} {o} {s} = {a}
                  <span>
                     {check ? trueIcon : falseIcon}
                  </span>
               </li>
               <li>5 x 6 = 30 <span>{falseIcon}</span></li>
               <li>7 x 4 = 28 <span>{trueIcon}</span></li>
               <li>8 x 5 = 40 <span>{trueIcon}</span></li>
               <li>8 x 3 = 24 <span>{falseIcon}</span></li>
               <li>6 x 6 = 36 <span>{trueIcon}</span></li>
               <li>9 x 7 = 63 <span>{trueIcon}</span></li>
               <li>4 x 7 = 25 <span>{trueIcon}</span></li>
               <li>6 x 3 = 18 <span>{falseIcon}</span></li>
               <li>5 x 6 = 30 <span>{falseIcon}</span></li>
            </ul>
         </div>
      </div>
   );
}