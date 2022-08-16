import React from "react";
import "./styles.scss";
import * as svgs from '../../assets/svgs';
import { useRound } from '../../context/use-round';

function Result() {

   const { round } = useRound();
   console.log(round);
   const { line, circleIcon, falseIcon, trueIcon } = svgs;

   const startGame = () => {

      //Başla butonuna tıklandığında context'ten gelen veriler ile oyun başa döner 

   };
   return (
      <div className="container">
         <div className="section-left">
            <h2>Sonuc</h2>
            {line}
            <div>Puan:</div>
            <div>Doğru Cevap:</div>
            <div>Yanlış Cevap:</div>
            {/* <Link onClick={startGame} to="/"> </Link> */}
            <div className="startGame">
               <span>Başa Dön</span>
               {circleIcon}
            </div>
         </div>
         <div className="section-right">
            <h2>Sorular</h2>
            <div>{line}</div>
            <ul className="question-list">
               <li>3 x 4 = 12 <span>{trueIcon}</span></li>
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

export default Result;