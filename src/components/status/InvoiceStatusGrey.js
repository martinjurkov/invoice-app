import React, { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

const InvoiceStatusGrey = () => {
  const { lightMode } = useContext(InvoiceContext);

  return (
    <div className={`invoice__status--grey ${lightMode && 'reverse'}`}>
      <span className={`grey__dot ${lightMode && 'reverse'}`}></span>
      <p>Draft</p>
    </div>
  );
};

export default InvoiceStatusGrey;
