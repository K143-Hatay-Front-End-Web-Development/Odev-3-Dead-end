import React, { useState, useEffect } from 'react';
import { useAnswer } from '../../context/use-answer';
import { shuffle } from '../../assets/functions';
import Choice from '../choice';

export default function Choices(props) {
   const { choices, isSelected, onClick } = props;
   const [indexes, setIndexes] = useState(shuffle());
   const { check } = useAnswer();

   useEffect(() => {
      setIndexes(shuffle());
   }, [choices]);

   return (
      <>
         {choices.map((choice, index) => {
            const isCorrect = check(index);
            return (
               <Choice
                  key={`choice-${index}`}
                  choice={choice}
                  index={indexes[index]}
                  selected={isSelected !== null ? isSelected === index : null}
                  correct={isCorrect}
                  onClick={() => onClick(isCorrect, choice, index)}
               />
            );
         }
         )}
      </>
   );
}
