import React, { useContext } from 'react';

import InvoiceContext from '../context/InvoiceContext';

const Card = ({ children }) => {
  const { lightMode } = useContext(InvoiceContext);

  return <div className={`card ${lightMode && 'reverse'}`}>{children}</div>;
};

export default Card;
