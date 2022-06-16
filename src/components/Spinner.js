import React from 'react';
import { ReactComponent as DualRing } from '../assets/icon-dual-ring.svg';

const Spinner = () => {
  return (
    <>
      <div className='overlay loading'></div>
      <div className='loading'>
        <DualRing />
      </div>
    </>
  );
};

export default Spinner;
