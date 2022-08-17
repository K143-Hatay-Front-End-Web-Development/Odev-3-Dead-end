import React, { useState } from 'react';
import { STRINGS } from '../../assets/strings';
import Legend from '../legend';
import Choices from '../choices';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { CORRECT, INCORRECT, SCHEMA } = STRINGS;
const schema = { success: `${SCHEMA} ${CORRECT}`, fail: `${SCHEMA} ${INCORRECT}`, default: SCHEMA };
const face = { success: svgs.face.happy, fail: svgs.face.sad, default: svgs.face.thinking };
const question = { first: 7, operation: 'x', second: 8, points: 3, choices: [56, 49, 64] };

export default function Round() {
   const [answer, setAnswer] = useState(null);
   const [isSelected, setIsSelected] = useState(null);
   const set = values => answer === CORRECT ? values.success : answer === INCORRECT ? values.fail : values.default;
   const { first, operation, second, choices } = question;

   function clickHandler(isCorrect, index) {
      if (!answer) {
         setAnswer(isCorrect ? CORRECT : INCORRECT);
         setIsSelected(index);
      }
   }

   return (
      <>
         <div className={set(schema)}>
            {svgs.schema}
            {set(face)}
            <Legend />
            <Choices choices={choices} isSelected={isSelected} onClick={clickHandler} />
            <p className='question'>{`${first} ${operation} ${second}`}</p>
            {/* <div className='check'> */}
            {/* {answer === CORRECT ? svgs.checkCorrect : answer === INCORRECT ? svgs.checkIncorrect : svgs.check} */}
            {/* {svgs.check} */}
            {/* {svgs.checkCorrect} */}
            {/* {svgs.checkIncorrect} */}
            {/* </div> */}
            {/* <div style={{ height: '60rem' }}></div> */}
         </div>
      </>
   );
}