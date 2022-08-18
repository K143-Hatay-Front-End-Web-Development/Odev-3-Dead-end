import React from 'react';
import './styles.scss';

export default function Legend(props) {
   const { score, no, currentQuestion } = props;

   const legend = [
      { title: 'Puan', value: score },
      { title: 'Tur', value: no },
      { title: 'Soru', value: currentQuestion }
   ];

   return (
      <div className='legend'>
         {legend.map((item, index) => (
            <p className='legend' key={`legend-${index}`}>
               {item.title}: {item.value}
            </p>
         ))}
      </div>
   );
}
