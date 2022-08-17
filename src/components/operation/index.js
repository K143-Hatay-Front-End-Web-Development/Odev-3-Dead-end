import React from 'react';
import * as svgs from '../../assets/svgs';

const { trueIcon } = svgs;

export default function Operation(props) {
   const { selected, label, onClick } = props;

   return (
      <div onClick={onClick}>
         {label}{selected && trueIcon}
      </div>
   );
}
