import React from 'react';
import Choice from '../choice';

// create random indexes to switch the position of the correct answer
const randomIndex = Math.floor(3 * Math.random());      // 0, 1, or 2
const iterator = Math.random() >= 0.5 ? 1 : -1;         // -1 or 1
const modulo = (number, n) => ((number % n) + n) % n;   // takes modulo n of a number
const randomIndexes = [randomIndex, modulo(randomIndex + iterator, 3), modulo(randomIndex + 2 * iterator, 3)]; // permutations of the set {0, 1, 2}
const correctIndex = 0;

export default function Choices(props) {
   const { choices, isSelected, onClick } = props;

   return (
      <>
         {choices.map((choice, index) => {
            const isCorrect = choices[correctIndex] === choice;
            return (
               <Choice
                  key={`choice-${index}`}
                  choice={choice}
                  index={randomIndexes[index]}
                  selected={isSelected !== null ? isSelected === index : null}
                  correct={isCorrect}
                  onClick={() => onClick(isCorrect, index)}
               />
            );
         }
         )}
      </>
   );
}
