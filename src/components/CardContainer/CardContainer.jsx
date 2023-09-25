import React from 'react';
import Card from '../Card/Card';

const CardContainer = () => {
  return (
    <div className='container mx-auto grid place-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-8 gap-6 pb-12'>
      <Card />
    </div>
  );
};
export default CardContainer;
