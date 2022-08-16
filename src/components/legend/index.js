import React from 'react';
import './styles.scss';

const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];

export default function Legend() {
   return (
      <div className='legend'>
         {legend.map((item, index) => <p className='legend' key={`legend-${index}`}>{item.title}: {item.value}</p>)}
      </div>
   );
}
