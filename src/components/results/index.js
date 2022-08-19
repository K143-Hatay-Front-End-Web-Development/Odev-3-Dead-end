import React from 'react';
import * as svgs from '../../assets/svgs';

const { falseIcon, trueIcon } = svgs;

export default function Results(props) {
   const { question } = props;
   const { first, operation, second, choice, isCorrect } = question;

   return (
      <li>
         {`${first} ${operation} ${second} = ${choice}`}
         <span>
            {isCorrect ? trueIcon : falseIcon}
         </span>
      </li>
   );
}
